
import { CardContent, Card, CardHeader, CardFooter } from "@/components/ui/card"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import shortenENS, { formatDollarAmount, formatAmount } from "@/lib/helpers"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ConstructionIcon } from 'lucide-react';

import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Leaderboard } from "@/components/leaderboard"
import { revalidateTag } from 'next/cache'
import { gql } from '../grafbase'

export const runtime = 'edge' // 'nodejs' (default) | 'edge'

export default async function Markets() {
  const query = `{ arkiver { Products(filter: {chainId: 9001}, sort: TRADECOUNT_DESC){ _id openInterestLongUsd openInterestShortUsd cumulativeFeesUsd cumulativePnlUsd cumulativeMarginUsd cumulativeVolumeUsd cumulativeLiquidationsUsd positionCount tradeCount } } }`
  const data = await gql(query)

  // console.log(aggregatedData)
  return (
    <div key="1" className="dark bg-[#1a1a1a] h-screen text-gray-200 text-sm xl:text-md">
      <div className="flex max-h-screen">
        <Sidebar />
        <main className="flex-1 p-4 text-xs bg-background-secondary">
          <Header breadcrumbs={["Markets", "Overview"]} />
          <ScrollArea className="h-calcscreen pr-4">

            <section>
              <Alert className="mb-8">
                <ConstructionIcon className="h-12 w-12" />
                <AlertTitle className="ml-8 text-xl">Heads up - construction up ahead.</AlertTitle>
                <AlertDescription className="ml-8">
                  This page is under active construction. We&apos;re working hard to improve your experience.
                </AlertDescription>
              </Alert>
              <h2 className="text-lg font-bold mb-4 text-gray-100 self-center lg:text-2xl">
                Forge Perpetual Markets
              </h2>
              <Card
                className="bg-background shadow-md rounded-lg p-1 h-min max-h-screen pt-6 overflow-y-scroll w-full"
                style={{
                  scrollbarColor: "#888 #eee",
                  scrollbarWidth: "thin",
                }}
              >
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-gray-200">Market</TableHead>
                        <TableHead className="text-gray-200">Open Interest Long (USD)</TableHead>
                        <TableHead className="text-gray-200">Open Interest Short (USD)</TableHead>
                        <TableHead className="text-gray-200">Cumulative Fees (USD)</TableHead>
                        <TableHead className="text-gray-200">Cumulative PNL (USD)</TableHead>
                        <TableHead className="text-gray-200">Cumulative Margin (USD)</TableHead>
                        <TableHead className="text-gray-200">Cumulative Volume (USD)</TableHead>
                        <TableHead className="text-gray-200">Cumulative Liquidations (USD)</TableHead>
                        <TableHead className="text-gray-200">Position Count</TableHead>
                        <TableHead className="text-gray-200">Trade Count</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="overflow-y-scroll">
                      {data.arkiver.Products.sort((a: { cumulativeVolumeUsd: number }, b: { cumulativeVolumeUsd: number }) => b.cumulativeVolumeUsd - a.cumulativeVolumeUsd).map((product: { _id: string, openInterestLongUsd: number, openInterestShortUsd: number, cumulativeFeesUsd: number, cumulativePnlUsd: number, cumulativeMarginUsd: number, cumulativeVolumeUsd: number, cumulativeLiquidationsUsd: number, positionCount: number, tradeCount: number }, index: number) => (
                        <TableRow key={index}>
                          <TableCell>{product._id.split(':')[0]}</TableCell>
                          <TableCell>{formatDollarAmount(product.openInterestLongUsd)}</TableCell>
                          <TableCell>{formatDollarAmount(product.openInterestShortUsd)}</TableCell>
                          <TableCell>{formatDollarAmount(product.cumulativeFeesUsd)}</TableCell>
                          <TableCell>{formatDollarAmount(product.cumulativePnlUsd)}</TableCell>
                          <TableCell>{formatDollarAmount(product.cumulativeMarginUsd)}</TableCell>
                          <TableCell>{formatDollarAmount(product.cumulativeVolumeUsd)}</TableCell>
                          <TableCell>{formatDollarAmount(product.cumulativeLiquidationsUsd)}</TableCell>
                          <TableCell>{product.positionCount}</TableCell>
                          <TableCell>{product.tradeCount}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </section>
          </ScrollArea>

        </main>
      </div>
    </div>
  )
}
