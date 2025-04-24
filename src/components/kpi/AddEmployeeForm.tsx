
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { 
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const employeeFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  position: z.string().min(2, {
    message: "Position must be at least 2 characters.",
  }),
  department: z.string({
    required_error: "Please select a department.",
  }),
  role: z.string({
    required_error: "Please select a role.",
  }),
  joiningDate: z.string().min(1, {
    message: "Please select a joining date.",
  }),
});

type EmployeeFormValues = z.infer<typeof employeeFormSchema>;

interface AddEmployeeFormProps {
  onCancel: () => void;
  onEmployeeAdded: () => void;
}

const AddEmployeeForm = ({ onCancel, onEmployeeAdded }: AddEmployeeFormProps) => {
  const form = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeFormSchema),
    defaultValues: {
      name: "",
      email: "",
      position: "",
      department: "",
      role: "",
      joiningDate: new Date().toISOString().substring(0, 10),
    },
  });

  const onSubmit = (data: EmployeeFormValues) => {
    // In a real app, we would save this to a database
    console.log("New employee data:", data);
    
    // Simulate storing employee data in localStorage for demo purposes
    const employees = JSON.parse(localStorage.getItem("employees") || "[]");
    const newEmployee = {
      ...data,
      id: Date.now().toString(),
      metrics: getDefaultMetricsForRole(data.role),
    };
    
    employees.push(newEmployee);
    localStorage.setItem("employees", JSON.stringify(employees));
    
    onEmployeeAdded();
  };

  const getDefaultMetricsForRole = (role: string) => {
    switch (role) {
      case "developer":
        return [
          { name: "Code Quality", target: 90, weight: 30 },
          { name: "Task Completion", target: 85, weight: 40 },
          { name: "Collaboration", target: 80, weight: 30 },
        ];
      case "designer":
        return [
          { name: "Design Quality", target: 90, weight: 40 },
          { name: "Project Delivery", target: 85, weight: 30 },
          { name: "Innovation", target: 85, weight: 30 },
        ];
      case "manager":
        return [
          { name: "Team Performance", target: 85, weight: 40 },
          { name: "Project Management", target: 90, weight: 30 },
          { name: "Client Satisfaction", target: 85, weight: 30 },
        ];
      case "accountant":
        return [
          { name: "Accuracy", target: 95, weight: 40 },
          { name: "Timeliness", target: 90, weight: 30 },
          { name: "Compliance", target: 100, weight: 30 },
        ];
      case "analyst":
        return [
          { name: "Analysis Quality", target: 90, weight: 35 },
          { name: "Reporting", target: 85, weight: 35 },
          { name: "Insights", target: 80, weight: 30 },
        ];
      default:
        return [
          { name: "Performance", target: 85, weight: 40 },
          { name: "Attendance", target: 90, weight: 30 },
          { name: "Quality", target: 85, weight: 30 },
        ];
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Add New Employee</h3>
        <p className="text-sm text-muted-foreground">
          Enter the details of the new employee to add them to the KPI system.
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john.doe@cerebrox.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Department</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="it">IT</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="hr">Human Resources</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position</FormLabel>
                  <FormControl>
                    <Input placeholder="Senior Developer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role Type</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select role type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="designer">Designer</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="accountant">Accountant</SelectItem>
                      <SelectItem value="analyst">Analyst</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="joiningDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Joining Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">Save Employee</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddEmployeeForm;
