
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { ChartContainer } from "@/components/ui/chart";
import { EmployeeList } from "@/components/kpi/EmployeeList";
import { PerformanceDashboard } from "@/components/kpi/PerformanceDashboard";
import AddEmployeeForm from "@/components/kpi/AddEmployeeForm";
import { useToast } from "@/hooks/use-toast";
import { Plus, ChartBar, Users } from "lucide-react";

const KPIEmployeesList = () => {
  const [activeTab, setActiveTab] = useState("employees");
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const { toast } = useToast();

  const handleAddEmployeeClick = () => {
    setShowAddEmployee(true);
  };

  const handleCancelAddEmployee = () => {
    setShowAddEmployee(false);
  };

  const handleEmployeeAdded = () => {
    setShowAddEmployee(false);
    toast({
      title: "Employee Added",
      description: "New employee has been successfully added to the system.",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Employee Performance Management</CardTitle>
            <CardDescription>
              Manage employees and track their performance metrics
            </CardDescription>
          </div>
          {activeTab === "employees" && !showAddEmployee && (
            <Button onClick={handleAddEmployeeClick}>
              <Plus className="mr-1" size={16} />
              Add Employee
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {showAddEmployee ? (
          <AddEmployeeForm 
            onCancel={handleCancelAddEmployee} 
            onEmployeeAdded={handleEmployeeAdded} 
          />
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="employees">
                <Users className="mr-2" size={16} />
                Employees
              </TabsTrigger>
              <TabsTrigger value="performance">
                <ChartBar className="mr-2" size={16} />
                Performance Dashboard
              </TabsTrigger>
            </TabsList>
            <TabsContent value="employees">
              <EmployeeList />
            </TabsContent>
            <TabsContent value="performance">
              <PerformanceDashboard />
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
    </Card>
  );
};

export default KPIEmployeesList;
