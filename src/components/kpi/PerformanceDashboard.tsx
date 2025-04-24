
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Employee } from "@/types/employee";
import { generatePerformanceData } from "@/lib/kpi-utils";

export const PerformanceDashboard = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [period, setPeriod] = useState("currentMonth");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [performanceData, setPerformanceData] = useState<any[]>([]);
  const [topPerformers, setTopPerformers] = useState<any[]>([]);
  const [averagePerformance, setAveragePerformance] = useState(0);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      const parsedEmployees = JSON.parse(storedEmployees);
      setEmployees(parsedEmployees);
      
      // Generate sample performance data for demo
      const data = generatePerformanceData(parsedEmployees, period);
      setPerformanceData(data.performanceData);
      setTopPerformers(data.topPerformers);
      setAveragePerformance(data.averagePerformance);
    }
  }, [period, departmentFilter]);

  const filteredData = departmentFilter 
    ? performanceData.filter(item => item.department.toLowerCase() === departmentFilter.toLowerCase())
    : performanceData;

  const departmentPerformance = [
    { name: "IT", value: 87 },
    { name: "Finance", value: 91 },
    { name: "HR", value: 78 },
    { name: "Marketing", value: 84 },
    { name: "Operations", value: 88 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="w-full md:w-1/3">
          <Select
            value={period}
            onValueChange={setPeriod}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="currentMonth">Current Month</SelectItem>
              <SelectItem value="lastMonth">Last Month</SelectItem>
              <SelectItem value="lastQuarter">Last Quarter</SelectItem>
              <SelectItem value="yearToDate">Year to Date</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="w-full md:w-1/3">
          <Select
            value={departmentFilter}
            onValueChange={setDepartmentFilter}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Departments</SelectItem>
              <SelectItem value="it">IT</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="hr">Human Resources</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="operations">Operations</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Average Performance KPI Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Average Performance Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averagePerformance.toFixed(1)}%</div>
            <Progress value={averagePerformance} className="h-2 mt-2" />
          </CardContent>
        </Card>
        
        {/* Working Days Coverage */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Working Days Coverage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <Progress value={92} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              23 working days out of 25 business days
            </p>
          </CardContent>
        </Card>
        
        {/* Assessment Completion Rate */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Assessment Completion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <Progress value={89} className="h-2 mt-2" />
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Employee Performance Comparison</CardTitle>
            <CardDescription>
              Performance scores across all departments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={filteredData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="name" 
                    angle={-45}
                    textAnchor="end"
                    height={70}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="performance" name="Performance Score" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Performers</CardTitle>
              <CardDescription>
                Employees with highest KPI scores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium leading-none">{performer.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {performer.department} • {performer.position}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold mr-2">{performer.score}%</span>
                      <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500 rounded-full" 
                          style={{ width: `${performer.score}%` }} 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Department Performance</CardTitle>
              <CardDescription>
                Average KPI scores by department
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentPerformance.map((dept, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <p className="font-medium">{dept.name}</p>
                    <div className="flex items-center">
                      <span className="font-bold mr-2">{dept.value}%</span>
                      <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full" 
                          style={{ 
                            width: `${dept.value}%`,
                            backgroundColor: dept.value >= 90 ? "#22c55e" : 
                                           dept.value >= 80 ? "#3b82f6" : 
                                           dept.value >= 70 ? "#f59e0b" : "#ef4444"
                          }} 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
