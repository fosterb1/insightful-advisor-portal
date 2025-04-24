
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Employee, Assessment, Metric } from "@/types/employee";
import { useToast } from "@/hooks/use-toast";
import { ChartContainer } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { generateDailyAssessmentData, calculateOverallScore } from "@/lib/kpi-utils";
import { ChartBar, Calendar, ArrowLeft, Plus } from "lucide-react";

const EmployeeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAddAssessment, setShowAddAssessment] = useState(false);
  const [assessmentDate, setAssessmentDate] = useState(new Date().toISOString().split('T')[0]);
  const [metricScores, setMetricScores] = useState<{[key: string]: number}>({});
  const [assessmentNotes, setAssessmentNotes] = useState("");
  
  useEffect(() => {
    // In a real app, this would be an API call
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      const employees = JSON.parse(storedEmployees);
      const foundEmployee = employees.find((emp: Employee) => emp.id === id);
      
      if (foundEmployee) {
        // Generate sample assessment data if none exists
        if (!foundEmployee.assessments) {
          const today = new Date();
          const startDate = new Date();
          startDate.setDate(today.getDate() - 30); // Last 30 days
          
          foundEmployee.assessments = generateDailyAssessmentData(
            startDate, 
            today,
            foundEmployee.metrics
          );
          
          // Save back to localStorage
          localStorage.setItem("employees", JSON.stringify(employees));
        }
        
        setEmployee(foundEmployee);
        
        // Initialize metric scores
        const initialScores: {[key: string]: number} = {};
        foundEmployee.metrics.forEach(metric => {
          initialScores[metric.name] = metric.target;
        });
        setMetricScores(initialScores);
      }
    }
    
    setLoading(false);
  }, [id]);
  
  const handleScoreChange = (metricName: string, value: string) => {
    const score = parseInt(value);
    if (!isNaN(score) && score >= 0 && score <= 100) {
      setMetricScores({
        ...metricScores,
        [metricName]: score
      });
    }
  };
  
  const handleAddAssessment = () => {
    if (!employee) return;
    
    // Create new assessment
    const newAssessment: Assessment = {
      date: assessmentDate,
      metrics: Object.entries(metricScores).map(([name, score]) => ({ name, score })),
      notes: assessmentNotes.trim() || undefined
    };
    
    // Update employee with new assessment
    const updatedAssessments = [...(employee.assessments || []), newAssessment];
    
    // Sort assessments by date
    updatedAssessments.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    const updatedEmployee = {
      ...employee,
      assessments: updatedAssessments
    };
    
    // Update in localStorage
    const storedEmployees = JSON.parse(localStorage.getItem("employees") || "[]");
    const updatedEmployees = storedEmployees.map((emp: Employee) => 
      emp.id === employee.id ? updatedEmployee : emp
    );
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    
    // Update state
    setEmployee(updatedEmployee);
    setShowAddAssessment(false);
    
    toast({
      title: "Assessment Added",
      description: `Assessment for ${assessmentDate} has been recorded.`,
    });
  };
  
  const prepareChartData = () => {
    if (!employee?.assessments) return [];
    
    return employee.assessments.map(assessment => {
      const dateObj = new Date(assessment.date);
      const formattedDate = `${dateObj.getDate()}/${dateObj.getMonth() + 1}`;
      
      const data: {[key: string]: any} = {
        date: formattedDate,
        fullDate: assessment.date
      };
      
      assessment.metrics.forEach(metric => {
        data[metric.name] = metric.score;
      });
      
      return data;
    });
  };
  
  if (loading) {
    return (
      <div className="flex items-center justify-center py-10">
        <p>Loading employee details...</p>
      </div>
    );
  }
  
  if (!employee) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <h3 className="text-lg font-medium">Employee not found</h3>
        <Button 
          variant="outline" 
          onClick={() => navigate("/kpi")}
          className="mt-4"
        >
          <ArrowLeft className="mr-2" size={16} />
          Back to Employees
        </Button>
      </div>
    );
  }
  
  const chartData = prepareChartData();
  const overallScore = calculateOverallScore(employee.assessments || [], employee.metrics);
  
  return (
    <div className="container-custom py-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate("/kpi")}
          >
            <ArrowLeft size={16} className="mr-1" />
            Back
          </Button>
          <h1 className="text-3xl font-bold text-consulting-blue">Employee KPI</h1>
        </div>
        
        {!showAddAssessment && (
          <Button onClick={() => setShowAddAssessment(true)}>
            <Plus size={16} className="mr-1" />
            Add Assessment
          </Button>
        )}
      </div>
      
      {showAddAssessment ? (
        <Card>
          <CardHeader>
            <CardTitle>Add New Assessment</CardTitle>
            <CardDescription>Record performance metrics for {employee.name}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Assessment Date</label>
                  <Input
                    type="date"
                    value={assessmentDate}
                    onChange={(e) => setAssessmentDate(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-3">Performance Metrics</h3>
                <div className="space-y-4">
                  {employee.metrics.map((metric) => (
                    <div key={metric.name} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium">
                          {metric.name}
                          <span className="text-muted-foreground ml-1">
                            (Target: {metric.target}%, Weight: {metric.weight}%)
                          </span>
                        </label>
                      </div>
                      <div className="md:col-span-1">
                        <Input
                          type="number"
                          min="0"
                          max="100"
                          value={metricScores[metric.name] || metric.target}
                          onChange={(e) => handleScoreChange(metric.name, e.target.value)}
                        />
                      </div>
                      <div className="md:col-span-1">
                        <Progress value={metricScores[metric.name] || metric.target} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Notes (Optional)</label>
                <Textarea
                  placeholder="Add any additional notes or comments about this assessment..."
                  value={assessmentNotes}
                  onChange={(e) => setAssessmentNotes(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setShowAddAssessment(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddAssessment}>
              Save Assessment
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold">{employee.name}</h2>
                  <p className="text-muted-foreground">{employee.email}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge variant="outline" className="capitalize">
                      {employee.role}
                    </Badge>
                    <Badge variant="outline" className="capitalize">
                      {employee.department}
                    </Badge>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Position</div>
                  <div className="font-medium">{employee.position}</div>
                  
                  <div className="text-sm text-muted-foreground mt-3 mb-1">Joined</div>
                  <div className="font-medium">
                    {new Date(employee.joiningDate).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <div className="text-sm text-muted-foreground mb-2">Overall Performance</div>
                  <div className="text-3xl font-bold">
                    {overallScore.toFixed(1)}%
                  </div>
                  <Progress value={overallScore} className="w-full mt-2" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="performance">
            <TabsList className="mb-6">
              <TabsTrigger value="performance">
                <ChartBar className="mr-2" size={16} />
                Performance Trends
              </TabsTrigger>
              <TabsTrigger value="assessments">
                <Calendar className="mr-2" size={16} />
                Assessment History
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="performance" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Trend</CardTitle>
                  <CardDescription>
                    Track progress over time for each metric
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={chartData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        {employee.metrics.map((metric, index) => (
                          <Line
                            key={metric.name}
                            type="monotone"
                            dataKey={metric.name}
                            stroke={index === 0 ? "#8884d8" : 
                                  index === 1 ? "#82ca9d" : 
                                  index === 2 ? "#ffc658" : 
                                  "#ff7300"}
                            activeDot={{ r: 8 }}
                          />
                        ))}
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {employee.metrics.map((metric) => (
                  <Card key={metric.name}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">
                        {metric.name}
                      </CardTitle>
                      <CardDescription>
                        Target: {metric.target}% • Weight: {metric.weight}%
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {employee.assessments && employee.assessments.length > 0 ? (
                        <>
                          <div className="text-2xl font-bold">
                            {employee.assessments[employee.assessments.length - 1].metrics.find(
                              m => m.name === metric.name
                            )?.score || 0}%
                          </div>
                          <Progress 
                            value={employee.assessments[employee.assessments.length - 1].metrics.find(
                              m => m.name === metric.name
                            )?.score || 0} 
                            className="h-2 mt-2" 
                          />
                        </>
                      ) : (
                        <>
                          <div className="text-2xl font-bold">N/A</div>
                          <Progress value={0} className="h-2 mt-2" />
                        </>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="assessments">
              <Card>
                <CardHeader>
                  <CardTitle>Assessment History</CardTitle>
                  <CardDescription>
                    Complete record of all past performance assessments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {employee.assessments && employee.assessments.length > 0 ? (
                    <div className="space-y-6">
                      {[...employee.assessments].reverse().map((assessment, idx) => (
                        <div key={idx} className="border rounded-md p-4">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold">
                              {new Date(assessment.date).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </h3>
                            <Badge>
                              {assessment.metrics.reduce((sum, m) => sum + m.score, 0) / 
                               assessment.metrics.length}% avg
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {assessment.metrics.map((metric) => (
                              <div key={metric.name} className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>{metric.name}</span>
                                  <span className="font-medium">{metric.score}%</span>
                                </div>
                                <Progress value={metric.score} className="h-1" />
                              </div>
                            ))}
                          </div>
                          
                          {assessment.notes && (
                            <div className="mt-4 p-3 bg-muted rounded-md text-sm">
                              <p className="font-medium mb-1">Notes:</p>
                              <p>{assessment.notes}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-8 text-center">
                      <p className="text-muted-foreground">No assessments have been recorded yet.</p>
                      <Button 
                        variant="outline" 
                        onClick={() => setShowAddAssessment(true)}
                        className="mt-4"
                      >
                        <Plus className="mr-2" size={16} />
                        Add First Assessment
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  );
};

export default EmployeeDetail;
