
import React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Shell } from "@/components/overview/shell"
export const runtime = 'edge' // 'nodejs' (default) | 'edge'

export default async function MarketsOverview() {

  return (
    <div key="1" className="dark bg-[#1a1a1a] h-screen text-gray-200 text-sm xl:text-md">
      <div className="flex max-h-screen">
        <Sidebar />
        <main className="flex-1 p-4 text-xs bg-background-secondary">
          <Header breadcrumbs={["Markets", "Overview"]} />
          <ScrollArea className="h-calcscreen-header pl-2 pr-6">
            <Shell />
          </ScrollArea>

        </main>
      </div>
    </div>
  )
}
