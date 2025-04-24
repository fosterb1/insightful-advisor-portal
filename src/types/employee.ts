
export interface Metric {
  name: string;
  target: number;
  weight: number;
}

export interface Assessment {
  date: string;
  metrics: {
    name: string;
    score: number;
  }[];
  notes?: string;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  position: string;
  department: string;
  role: string;
  joiningDate: string;
  metrics: Metric[];
  assessments?: Assessment[];
}
