import { Card, SparkAreaChart, SparkBarChart, SparkLineChart, Text, Title } from "@tremor/react";
import { TickerCard } from "../ticker-card";
import { Separator } from "../ui/separator";
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

export function TickerHeader() {
  return (
    // <Card className="max-w-lg flex items-center justify-between mx-auto px-4 py-3.5">
    // </Card>
    <div className="w-full space-x-2">
    <TickerCard />
    <TickerCard />
    <TickerCard />
    <Separator className="mb-4  shadow-md shadow-neutral-800/40" />
    </div>
  );
}