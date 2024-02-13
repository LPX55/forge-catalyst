
import { CardContent, Card, CardHeader, CardFooter } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import shortenENS, {formatDollarAmount, formatAmount} from "@/lib/helpers"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import ConstructionAlert from "@/components/construction"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { gql } from '../../grafbase'

export const runtime = 'edge' // 'nodejs' (default) | 'edge'

export default async function MarketsData() {
  const query = `{ arkiver2 { Products(filter: {chainId: 9001}, sort: TRADECOUNT_DESC){ _id openInterestLongUsd openInterestShortUsd cumulativeFeesUsd cumulativePnlUsd cumulativeMarginUsd cumulativeVolumeUsd cumulativeLiquidationsUsd positionCount tradeCount } } }`
  const data = await gql(query)
  
  // console.log(aggregatedData)
  return (
    <div key="1" className="dark bg-[#1a1a1a] h-screen text-gray-200 text-sm xl:text-md">
      <div className="flex max-h-screen">
      <Sidebar />
        <main className="flex-1 p-4 text-xs bg-background-secondary">
        <Header breadcrumbs={["Markets", "Data"]}/>
        <ScrollArea className="h-calcscreen-header pr-4">

          <section>
            <div className="flex flex-row justify-between items-center mb-1">
            <h2 className="text-lg font-bold mb-4 text-gray-100 self-center lg:text-2xl lg:pl-2">
              Cumulative Market Data
            </h2>
            <ConstructionAlert />
            </div>
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
                    <TableRow className="mb-4">
                      <TableHead className="text-gray-200">Market</TableHead>
                      <TableHead className="text-gray-200">Open Interest Long (USD)</TableHead>
                      <TableHead className="text-gray-200">Open Interest Short (USD)</TableHead>
                      <TableHead className="text-gray-200">Cumulative Fees (USD)</TableHead>
                      <TableHead className="text-gray-200">Cumulative PNL (USD)</TableHead>
                      <TableHead className="text-gray-200">Cumulative Margin (USD)</TableHead>
                      <TableHead className="text-gray-200">Cumulative Volume (USD)</TableHead>
                      <TableHead className="text-gray-200">Cumulative Liquidations (USD)</TableHead>
                      <TableHead className="text-gray-200">Open Positions</TableHead>
                      <TableHead className="text-gray-200">Trade Count</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="overflow-y-scroll">
                  {data.arkiver2.Products.sort((a: any, b: any) => b.cumulativeVolumeUsd - a.cumulativeVolumeUsd).map((product: any, index: number) => (
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
