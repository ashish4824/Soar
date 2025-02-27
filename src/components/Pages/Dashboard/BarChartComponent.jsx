import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { day: "Sat", deposit: 200, withdraw: 450 },
  { day: "Sun", deposit: 150, withdraw: 300 },
  { day: "Mon", deposit: 250, withdraw: 350 },
  { day: "Tue", deposit: 320, withdraw: 470 },
  { day: "Wed", deposit: 180, withdraw: 120 },
  { day: "Thu", deposit: 220, withdraw: 400 },
  { day: "Fri", deposit: 300, withdraw: 390 }
];

const BarChartComponent = () => {
  return (
    <div className="2xl:w-[69%] xl:w-[63%] w-full ">
      <h2 className="capitalize text-gray-900 font-semibold text-lg my-4">Weekly Activity</h2>
      <ResponsiveContainer className="w-full bg-white shadow-lg rounded-2xl border-[0.5px]" width="100%" height={318}>
        <BarChart className="text-sm " data={data} barSize={10}>
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip cursor={{ fill: "#f1f5f9" }} />
          <Legend iconType="circle" />
          <Bar dataKey="deposit" fill="#2563EB" name="Deposit" radius={[4, 4, 4, 4]} />
          <Bar dataKey="withdraw" fill="#000" name="Withdraw" radius={[4, 4, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
