import { BadgeDelta, Card, SparkAreaChart, SparkBarChart, SparkLineChart, Text, Title } from "@tremor/react";

export const chartdata = [
  {
    month: "Jan 21",
    Performance: 4000,
    "Benchmark": 3000,
  },
  {
    month: "Feb 21",
    Performance: 3000,
    "Benchmark": 2000,
  },
  {
    month: "Mar 21",
    Performance: 2000,
    "Benchmark": 1700,
  },
  {
    month: "Apr 21",
    Performance: 2780,
    "Benchmark": 2500,
  },
  {
    month: "May 21",
    Performance: 1890,
    "Benchmark": 1890,
  },
  {
    month: "Jun 21",
    Performance: 2390,
    "Benchmark": 2000,
  },
  {
    month: "Jul 21",
    Performance: 3490,
    "Benchmark": 3000,
  },
];

export function TickerCard() {
  return (
    <div className="max-w-md w-auto flex flex-row inline-flex items-center justify-between mx-auto space-x-2 px-2 pb-3.5 ">
      <div className="flex items-center p-2">
        <span className="font-mono text-lg font-semibold ">AAPL</span>
      </div>
      <SparkAreaChart
        data={chartdata}
        categories={["Performance"]}
        index={"month"}
        colors={["emerald-700"]}
        className="h-10 w-28 pt-2 opacity-80"
        curveType="monotone"
        showGradient={true}
      />
      <div className="flex flex-row items-center space-x-2 px-2">
        <span className="text-lg font-mono font-semibold rounded-sm text-gray-100">$179.26</span>
        <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true} size="xs" className="!rounded-sm text-xs">
        +12.3%
      </BadgeDelta>
        {/* <span className="px-2 py-1 text-sm font-medium rounded text-white bg-emerald-500">+1.72%</span> */}
      </div>
    </div>
  );
}