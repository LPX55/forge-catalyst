import { CardContent, Card } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Teaser } from "@/components/teaser"
import shortenENS, { formatDollarAmount, formatAmount } from "@/lib/helpers"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { gql } from '../grafbase'
import { Header } from "@/components/header"


export const runtime = 'nodejs' // 'nodejs' (default) | 'edge'

export default async function Markets() {
    // const query = `{ arkiver { Products(filter: {chainId: 9001}, sort: TRADECOUNT_DESC){ _id openInterestLongUsd openInterestShortUsd cumulativeFeesUsd cumulativePnlUsd cumulativeMarginUsd cumulativeVolumeUsd cumulativeLiquidationsUsd positionCount tradeCount } } }`
    // const data = await gql(query)

    // console.log(aggregatedData)
    return (
        <div key="1" className="dark bg-[#1a1a1a] h-screen text-gray-200 text-sm xl:text-md">
            <div className="flex max-h-screen">
                <Sidebar />
                <main className="flex-1 p-4 text-xs bg-neutral-900">
                <Header breadcrumbs={["IronWorks", "Landing"]}/>


                    <section className="px-0">

                            <ScrollArea className="h-calcscreen">
                                   <Teaser />
                                </ScrollArea>
                    </section>


                </main>
            </div>
        </div>
    )
}

