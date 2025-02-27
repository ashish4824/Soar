import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area
} from "recharts";

const data = [
  { month: "Jul", balance: 150 },
  { month: "Aug", balance: 300 },
  { month: "Sep", balance: 500 },
  { month: "Oct", balance: 750 },
  { month: "Nov", balance: 400 },
  { month: "Dec", balance: 650 },
  { month: "Jan", balance: 600 }
];

const BalanceHistoryChart = () => {
  return (
    <div className="2xl:w-[69%] xl:w-[62%] w-full">
      <h2 className="text-lg font-semibold my-4">Balance History</h2>
    <div className="bg-white shadow-lg rounded-2xl p-4 border-2 border-gray-200">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart className="text-sm" data={data}>
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563EB" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="balance" stroke="#2563EB" fill="url(#colorBalance)" />
          <Line type="monotone" dataKey="balance" stroke="#2563EB" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default BalanceHistoryChart;
