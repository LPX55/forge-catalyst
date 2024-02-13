
import { CardContent, Card, CardHeader, CardFooter } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import shortenENS, { formatDollarAmount, formatAmount, formatTime } from "@/lib/helpers"
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
import Image from 'next/image';

export const runtime = 'edge' // 'nodejs' (default) | 'edge'

export default async function UserHistoricalTrades({ props }: { props: { user: string } }) {
  const queryFields = "_id duration size sizeUsd margin marginUsd entryPrice closePrice leverage productId fee feeUsd pnl pnlUsd wasLiquidated isLong isFullClose timestamp";
  const query = `{arkiver2 { Trades (sort: TIMESTAMP_DESC limit:100 filter: {user: "${props.user}" chainId: 9001}){ ${queryFields} }}}`
  const data = await gql(query)

  return (

    <Table>
      <TableHead>
        <TableRow className="mb-4">
          <TableHeaderCell className="text-gray-200 w-16">Market</TableHeaderCell>
          <TableHeaderCell className="text-gray-200">Leverage x Margin</TableHeaderCell>
          <TableHeaderCell className="text-gray-200">Margin <span className="font-mono text-xs">(USD)</span></TableHeaderCell>
          <TableHeaderCell className="text-gray-200">Size</TableHeaderCell>
          <TableHeaderCell className="text-gray-200">PNL</TableHeaderCell>
          <TableHeaderCell className="text-gray-200">Entry (Exit)</TableHeaderCell>
          <TableHeaderCell className="text-gray-200">Fees</TableHeaderCell>
          <TableHeaderCell className="text-gray-200">⌛</TableHeaderCell>
          <TableHeaderCell className="text-gray-200">Timestamp</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.arkiver2.Trades.map((trade: any, index: number) => (
          <TableRow key={index}>
            <TableCell className="font-mono font-bold text-sm tracking-tighter">{trade.productId}</TableCell>
            <TableCell className="text-xs tracking-tighter">
              <span className={trade.isLong ? 'font-bold font-mono text-green-500 text-base' : 'font-bold font-mono text-red-500 text-base'}>
                {formatAmount(trade.leverage, 0)}
              </span> x <span className="font-mono font-bold text-base ">
                {formatAmount(trade.margin, 0)}</span> <span className="font-sans text-[0.75rem] text-neutral-400">stEVMOS</span>
            </TableCell>
            <TableCell className="font-mono font-bold text-sm tracking-tighter">{formatDollarAmount(trade.marginUsd)}</TableCell>
            <TableCell className="font-mono font-bold text-sm tracking-tighter">{formatDollarAmount(trade.sizeUsd)}  <span className="font-sans text-[0.75rem] text-neutral-400">({formatAmount(trade.size, 1)} <Image src="/stevmos.png" width={14} height={14} alt="stEVMOS" className="inline ml-1" />)</span></TableCell>
            <TableCell className={`text-sm font-mono tracking-tighter font-medium ${trade.pnlUsd < 0 ? 'text-red-500' : 'text-green-500'}`}>{formatDollarAmount(trade.pnlUsd)}  <span className="font-sans text-[0.75rem] text-neutral-400">({formatAmount(trade.pnl)} <Image src="/stevmos.png" width={14} height={14} alt="stEVMOS" className="inline ml-1" />)</span></TableCell>
            <TableCell className="font-mono text-sm tracking-tighter">
              ${Number(trade.entryPrice).toPrecision(6)}
              <span className={trade.closePrice - trade.entryPrice > 0 ? 'ml-1 text-green-500' : 'ml-1 text-red-500'}>
                ({formatDollarAmount(trade.closePrice - trade.entryPrice)})
              </span>
            </TableCell>

            <TableCell className="font-mono text-xs tracking-tighter">
              {trade.wasLiquidated ?
                <span className="text-yellow-500">LIQUIDATED</span> :
                <>
                  {formatAmount(trade.fee)} <Image src="/stevmos.png" width={16} height={16} alt="stEVMOS" className="inline" />
                </>
              }
            </TableCell>
            <TableCell className="font-mono text-xs">{formatTime(trade.duration)}</TableCell>

            <TableCell className="font-mono tracking-tighter text-xs">
              {new Date(trade.timestamp * 1000).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, day: 'numeric', month: 'numeric', year: '2-digit' })}
              {trade.isFullClose ? <span className="inline-flex self-center ml-2 text-neutral-400"><IconFullscreenExit /></span> : ''}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

function IconPackageVariantClosedCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M12 2c-.2 0-.4.1-.6.2L3.5 6.6c-.3.2-.5.5-.5.9v9c0 .4.2.7.5.9l7.9 4.4c.2.1.4.2.6.2s.4-.1.6-.2l.9-.5c-.3-.6-.4-1.3-.5-2v-6.7l6-3.4V13c.7 0 1.4.1 2 .3V7.5c0-.4-.2-.7-.5-.9l-7.9-4.4c-.2-.1-.4-.2-.6-.2m0 2.2l6 3.3-2 1.1-5.9-3.4 1.9-1M8.1 6.3L14 9.8l-2 1.1-6-3.4 2.1-1.2M5 9.2l6 3.4v6.7l-6-3.4V9.2m16.3 6.6l-3.6 3.6-1.6-1.6L15 19l2.8 3 4.8-4.8-1.3-1.4z" />
    </svg>
  );
}

function IconFullscreenExit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M14 14h5v2h-3v3h-2v-5m-9 0h5v5H8v-3H5v-2m3-9h2v5H5V8h3V5m11 3v2h-5V5h2v3h3z" />
    </svg>
  );
}