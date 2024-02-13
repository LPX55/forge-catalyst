import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Text,
    Title,
  } from "@tremor/react";
  import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

  import { gql } from '../grafbase'
import { Separator } from "@/components/ui/separator";

  export default async function Review() {
    const query = `{ arkiver2 { Trades ( filter: { _operators: {timestamp:{gte: 1704067260, lt: 1706745660 }}, chainId: 9001} sort: TIMESTAMP_DESC limit: 1000 ) { _id timestamp user productId margin marginUsd leverage size sizeUsd feeUsd pnl pnlUsd  wasLiquidated duration}}}`
    const data = await gql(query)
    const mergedData = [...data?.arkiver2?.Trades];
    return (

        <>
        <Title>Data under review.</Title>
        <Separator className="my-5"/>
        <ScrollArea className="h-[80vh] w-auto rounded-md border">
          <Table className="overflow-x-auto overflow-y-auto ">
            <TableHead>
              <TableRow className="font-bold">
                {/* <TableHeaderCell>_id</TableHeaderCell> */}
                <TableHeaderCell>timestamp</TableHeaderCell>
                <TableHeaderCell>user</TableHeaderCell>
                <TableHeaderCell>productId</TableHeaderCell>
                <TableHeaderCell>margin</TableHeaderCell>
                <TableHeaderCell>marginUsd</TableHeaderCell>
                <TableHeaderCell>leverage</TableHeaderCell>
                <TableHeaderCell>size</TableHeaderCell>
                <TableHeaderCell>sizeUsd</TableHeaderCell>
                <TableHeaderCell>feeUsd</TableHeaderCell>
                <TableHeaderCell>pnl</TableHeaderCell>
                <TableHeaderCell>pnlUsd</TableHeaderCell>
                <TableHeaderCell>wasLiquidated</TableHeaderCell>
                <TableHeaderCell>duration</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {mergedData.map((item, index) => (
                <TableRow key={index}>
                    {/* <TableCell>{item._id}</TableCell> */}
                    <TableCell>{item.timestamp}</TableCell>
                    <TableCell>{item.user}</TableCell>
                    <TableCell>{item.productId}</TableCell>
                    <TableCell>{item.margin}</TableCell>
                    <TableCell>{item.marginUsd}</TableCell>
                    <TableCell>{item.leverage}</TableCell>
                    <TableCell>{item.size}</TableCell>
                    <TableCell>{item.sizeUsd}</TableCell>
                    <TableCell>{item.feeUsd}</TableCell>
                    <TableCell>{item.pnl}</TableCell>
                    <TableCell>{item.pnlUsd}</TableCell>
                    <TableCell>{item.wasLiquidated}</TableCell>
                    <TableCell>{item.duration}</TableCell>
                </TableRow>
            ))}
            </TableBody>
          </Table>
          </ScrollArea>
      
     
        </>
    
      )
  }