import React from "react";
import { Sidebar } from "@/components/sidebar"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <LoadingSkeleton />
  }

function LoadingSkeleton() {
    return (
        <div key="1" className="dark bg-[#1a1a1a] h-screen text-gray-200 text-sm xl:text-md">
           <div className="h-screen w-screen flex flex-col items-center justify-center bg-neutral-900">
      <div className="flex flex-col items-center space-y-6">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-orange-500 animate-spin w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
        </svg>

        <h1 className="text-3xl font-bold font-mono tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
          Loading data...
        </h1>
      </div>
    </div>
    </div>
    );
}
