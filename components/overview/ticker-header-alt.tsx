'use client'
import { SparkAreaChart, SparkBarChart, SparkLineChart, Text, Title } from "@tremor/react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

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
   <>
    <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
    <Carousel   
    plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
  <CarouselContent>
        <CarouselItem  className="md:basis-1/2 lg:basis-1/6">
            <h4 className="font-bold text-lg">AAPL</h4>
            <div className="flex flex-row justify-start items-center gap-3">
              <p className="text-green-500">$150.25</p>
              <button className="inline-flex items-center rounded-md border border-gray-200 border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80">
                +1.2%
              </button>
            </div>
          </CarouselItem>
          <CarouselItem  className="md:basis-1/2 lg:basis-1/6">
            <h4 className="font-bold text-lg">GOOGL</h4>
            <div className="flex flex-row justify-start items-center gap-3">
              <p className="text-green-500">$2,527.83</p>
              <button className="inline-flex items-center rounded-md border border-gray-200 border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80">
                +0.8%
              </button>
            </div>
          </CarouselItem>
          <CarouselItem  className="md:basis-1/2 lg:basis-1/6">
            <h4 className="font-bold text-lg">AMZN</h4>
            <div className="flex flex-row justify-start items-center gap-3">
              <p className="text-red-500">$3,319.14</p>
              <button className="inline-flex items-center rounded-md border border-gray-200 border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80">
                -0.5%
              </button>
            </div>
          </CarouselItem>
          <CarouselItem  className="md:basis-1/2 lg:basis-1/6">
            <h4 className="font-bold text-lg">MSFT</h4>
            <div className="flex flex-row justify-start items-center gap-3">
              <p className="text-green-500">$300.21</p>
              <button className="inline-flex items-center rounded-md border border-gray-200 border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80">
                +1.0%
              </button>
            </div>
          </CarouselItem>
          <CarouselItem  className="md:basis-1/2 lg:basis-1/6">
            <h4 className="font-bold text-lg">TSLA</h4>
            <div className="flex flex-row justify-start items-center gap-3">
              <p className="text-red-500">$1,005.30</p>
              <button className="inline-flex items-center rounded-md border border-gray-200 border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80">
                -2.3%
              </button>
            </div>
          </CarouselItem>
          <CarouselItem  className="md:basis-1/2 lg:basis-1/6">
            <h4 className="font-bold text-lg">FB</h4>
            <div className="flex flex-row justify-start items-center gap-3">
              <p className="text-green-500">$350.70</p>
              <button className="inline-flex items-center rounded-md border border-gray-200 border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80">
                +0.6%
              </button>
            </div>
          </CarouselItem>
          <CarouselItem  className="md:basis-1/2 lg:basis-1/6">
            <h4 className="font-bold text-lg">AAPL</h4>
            <div className="flex flex-row justify-start items-center gap-3">
              <p className="text-green-500">$150.25</p>
              <button className="inline-flex items-center rounded-md border border-gray-200 border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80">
                +1.2%
              </button>
            </div>
          </CarouselItem>
          <CarouselItem  className="md:basis-1/2 lg:basis-1/6">
            <h4 className="font-bold text-lg">GOOGL</h4>
            <div className="flex flex-row justify-start items-center gap-3">
              <p className="text-green-500">$2,527.83</p>
              <button className="inline-flex items-center rounded-md border border-gray-200 border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80">
                +0.8%
              </button>
            </div>
          </CarouselItem>
          <CarouselItem  className="md:basis-1/2 lg:basis-1/6">
            <h4 className="font-bold text-lg">AMZN</h4>
            <div className="flex flex-row justify-start items-center gap-3">
              <p className="text-red-500">$3,319.14</p>
              <button className="inline-flex items-center rounded-md border border-gray-200 border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80">
                -0.5%
              </button>
            </div>
          </CarouselItem>
          <CarouselItem  className="md:basis-1/2 lg:basis-1/6">
            <h4 className="font-bold text-lg">MSFT</h4>
            <div className="flex flex-row justify-start items-center gap-3">
              <p className="text-green-500">$300.21</p>
              <button className="inline-flex items-center rounded-md border border-gray-200 border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80">
                +1.0%
              </button>
            </div>
          </CarouselItem>
          <CarouselItem  className="md:basis-1/2 lg:basis-1/6">
            <h4 className="font-bold text-lg">TSLA</h4>
            <div className="flex flex-row justify-start items-center gap-3">
              <p className="text-red-500">$1,005.30</p>
              <button className="inline-flex items-center rounded-md border border-gray-200 border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80">
                -2.3%
              </button>
            </div>
          </CarouselItem>
          <CarouselItem  className="md:basis-1/2 lg:basis-1/6">
            <h4 className="font-bold text-lg">FB</h4>
            <div className="flex flex-row justify-start items-center gap-3">
              <p className="text-green-500">$350.70</p>
              <button className="inline-flex items-center rounded-md border border-gray-200 border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80">
                +0.6%
              </button>
            </div>
          </CarouselItem>
        </CarouselContent>
        </Carousel>    
        </div>
    </>
  )
}
