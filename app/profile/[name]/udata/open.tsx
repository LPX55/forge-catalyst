
import { CardContent, Card, CardHeader, CardFooter } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import shortenENS, { formatDollarAmount, formatAmount, parseUnits, formatUnits } from "@/lib/helpers"
import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from "@tremor/react";
import ConstructionAlert from "@/components/construction"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { gql } from '../../../grafbase'

export const runtime = 'edge' // 'nodejs' (default) | 'edge'

export default async function UserOpenTrades({ props }: { props: { user: string } }) {
  const query = `{ arkiver2 { Positions( sort: CREATEDATTIMESTAMP_DESC filter: { user: "${props.user}" chainId: 9001 } ) { _id productId currency size margin leverage isLong fee price liquidationPrice createdAtTimestamp updatedAtTimestamp } } }`
  const tradeQuery = `{arkiver2 { Trades (filter: {user: "${props.user}" chainId: 9001 isFullClose: false}){ _id entryPrice closePrice duration size margin isLong currency productId fee pnl wasLiquidated isFullClose timestamp}}}`
  const priceQuery = `{ forgePrice { lastCandles( subgraphError: allow, where: {token0: "0x2c68d1d6ab986ff4640b51e1f14c716a076e44c4", token1: "0xb8f812b5943ab3bf941d5d4f1de90a4b326c5d8f", duration: 300}) { id token0 token1 timestamp close } } }`
  const data = await gql(query)
  const priceData = await gql(priceQuery)
  const lastCandle = Number(priceData.forgePrice.lastCandles[0].close)
  const stevmosPrice = ((1 / lastCandle) * 1e13).toFixed(4);

  return (

    <Table>
      <TableHead>
        <TableRow className="mb-4 font-sans font-medium border-b-2 border-neutral-700">
          <TableHeaderCell className="text-gray-200">Market</TableHeaderCell>
          <TableHeaderCell className="text-gray-200">Leverage x Margin</TableHeaderCell>
          <TableHeaderCell className="text-gray-200">Position Size</TableHeaderCell>
          <TableHeaderCell className="text-gray-200">Entry Price</TableHeaderCell>
          <TableHeaderCell className="text-gray-200">Liquidation Price</TableHeaderCell>
          <TableHeaderCell className="text-gray-200">Order Fee</TableHeaderCell>
          <TableHeaderCell className="text-gray-200">Created At</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody className="overflow-y-scroll">
      {data.arkiver2.Positions.length > 0 ? (
         data.arkiver2.Positions.map((position: any, index: number) => (
      <TableRow key={position._id.split(':')[0]} className="text-neutral-200 text-sm">
            <TableCell className="font-sans font-bold tracking-wide">{position.productId}</TableCell>
            <TableCell className="text-xs">
              <span className={position.isLong ? 'font-bold font-mono text-green-500 text-base' : 'font-bold font-mono text-red-500 text-base'}>
                {formatAmount(position.leverage, 0)} 
              </span> x <span className="font-mono font-bold text-base ">
              {formatAmount(position.margin)}</span> <span className="font-sans text-[0.75rem] text-neutral-400">stEVMOS</span>
            </TableCell>                        
            <TableCell><span className="font-mono font-bold text-base">{formatDollarAmount(position.size * Number(stevmosPrice))}</span> <span className="text-[0.75rem] text-neutral-400">({(position.size).toFixed(1)} stEVMOS)</span></TableCell>
            <TableCell className="font-mono font-bold text-base">${Number(position.price).toFixed(3)}</TableCell>
            <TableCell className="font-mono font-bold text-base">${Number(position.liquidationPrice).toFixed(3)} <span className="font-normal text-sm text-neutral-400">({Number(position.liquidationPrice - position.price).toFixed(3)}) </span></TableCell>
            <TableCell className="font-mono font-bold text-base">{formatAmount(position.fee, 1)} <span className="font-sans text-[0.75rem] text-neutral-400">stEVMOS</span></TableCell>
            <TableCell className="font-mono font-normal text-sm text-neutral-400">{new Date(position.createdAtTimestamp * 1000).toLocaleString()}</TableCell>
          </TableRow>
          ))
          ) : (
            <TableRow>
            <TableCell colSpan={7} className="text-center text-neutral-200 text-lg py-8">
              No open positions or data currently unavailable.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>

  )
}
