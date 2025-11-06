import React from "react";
import scholarships from "../data/scholarshipData";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const Charts = () => {
  const data = [
    { country: "India", count: scholarships.filter((s) => s.country === "India").length },
    { country: "USA", count: scholarships.filter((s) => s.country === "USA").length },
    { country: "UK", count: scholarships.filter((s) => s.country === "UK").length },
    { country: "Canada", count: scholarships.filter((s) => s.country === "Canada").length },
    { country: "Germany", count: scholarships.filter((s) => s.country === "Germany").length },
  ];

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-700">
        Scholarships by Country
      </h2>
      <div className="h-64 sm:h-80 md:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#3b82f6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
