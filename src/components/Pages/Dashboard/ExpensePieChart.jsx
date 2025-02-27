import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Entertainment", value: 30, color: "#1E3A8A" },
  { name: "Investment", value: 20, color: "#2563EB" },
  { name: "Bill Expense", value: 15, color: "#EA580C" },
  { name: "Others", value: 35, color: "#000000" }
];

const ExpensePieChart = () => {
  return (
    <div className="2xl:w-[29%] xl:w-[32%] w-full">
     <h2 className="capitalize text-gray-900 font-semibold text-lg my-4">expense statistics</h2>
    <div className="bg-white shadow-lg rounded-2xl  h-80 border-2 border-gray-200">
      <ResponsiveContainer >
        <PieChart className="w-full h-full">
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={({ name, percent }) => `${(percent * 100).toFixed(0)}% ${name}`}
          >
            {data.map((entry, index) => (
              <Cell className="w-full h-full" key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default ExpensePieChart;
