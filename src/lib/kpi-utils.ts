
import { Employee } from "@/types/employee";

export const generatePerformanceData = (employees: Employee[], period: string) => {
  // In a real app, this would fetch real data from an API
  // Here we're generating sample data for demo purposes
  
  const performanceData = employees.map(employee => {
    // Generate a random performance score between 60-98
    const performance = Math.floor(Math.random() * 38) + 60;
    
    return {
      name: employee.name,
      performance,
      department: employee.department,
      position: employee.position
    };
  });
  
  // Sort employees by performance and get top 5
  const topPerformers = [...performanceData]
    .sort((a, b) => b.performance - a.performance)
    .slice(0, 5)
    .map(performer => ({
      name: performer.name,
      department: performer.department,
      position: performer.position,
      score: performer.performance
    }));
  
  // Calculate average performance
  const averagePerformance = performanceData.length 
    ? performanceData.reduce((sum, employee) => sum + employee.performance, 0) / performanceData.length
    : 0;
  
  return {
    performanceData,
    topPerformers,
    averagePerformance
  };
};

export const getWorkingDaysInMonth = (year: number, month: number) => {
  // This function calculates the actual working days in a month
  // excluding weekends and common holidays
  const daysInMonth = new Date(year, month, 0).getDate();
  let workingDays = 0;
  
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();
    
    // Skip weekends (0 = Sunday, 6 = Saturday)
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      workingDays++;
    }
  }
  
  // In a real app you would also subtract holidays
  // This is a simplified version
  return workingDays;
};

export const calculateOverallScore = (assessments: any[], metrics: any[]) => {
  if (!assessments?.length) return 0;
  
  const latestAssessment = assessments[assessments.length - 1];
  let totalWeightedScore = 0;
  let totalWeight = 0;
  
  latestAssessment.metrics.forEach((metric: any) => {
    const metricDef = metrics.find(m => m.name === metric.name);
    if (metricDef) {
      totalWeightedScore += metric.score * (metricDef.weight / 100);
      totalWeight += metricDef.weight / 100;
    }
  });
  
  return totalWeight ? (totalWeightedScore / totalWeight) : 0;
};

export const generateDailyAssessmentData = (startDate: Date, endDate: Date, metrics: any[]) => {
  const assessments = [];
  let currentDate = new Date(startDate);
  
  while (currentDate <= endDate) {
    // Skip weekends
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      const metricAssessment = metrics.map(metric => {
        // Generate a score between 70-100 for each metric
        const baseScore = Math.floor(Math.random() * 30) + 70;
        
        return {
          name: metric.name,
          score: baseScore
        };
      });
      
      assessments.push({
        date: currentDate.toISOString().split('T')[0],
        metrics: metricAssessment
      });
    }
    
    // Move to next day
    currentDate = new Date(currentDate);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return assessments;
};
