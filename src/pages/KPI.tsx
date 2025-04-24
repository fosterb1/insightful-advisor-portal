
import React from "react";
import Layout from "@/components/layout/Layout";
import KPIEmployeesList from "@/components/kpi/KPIEmployeesList";

const KPI = () => {
  return (
    <Layout>
      <div className="container-custom py-10">
        <h1 className="text-3xl font-bold mb-6 text-consulting-blue">Employee KPI Dashboard</h1>
        <KPIEmployeesList />
      </div>
    </Layout>
  );
};

export default KPI;
