"use client"
import { CardContent, Card, CardHeader, CardFooter } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import shortenENS, { formatDollarAmount, formatAmount } from "@/lib/helpers"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import ConstructionAlert from "@/components/construction"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { gql } from '../../../grafbase'
import { List, ListItem, Col, Title, Flex, Text, Metric, ProgressCircle, BadgeDelta, Tracker } from "@tremor/react"
import {
    Legend,
    CategoryBar,
    ScatterChart
} from "@tremor/react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"


const chartdata2 = [
    {
        location: "Liquidated",
        PNL: 100,
        Leverage: 200,
        TradeSize: 200,
    },
    {
        location: "Liquidated",
        PNL: 120,
        Leverage: 100,
        TradeSize: 260,
    },
    {
        location: "Liquidated",
        PNL: 170,
        Leverage: 300,
        TradeSize: 400,
    },
    {
        location: "Profit",
        PNL: 140,
        Leverage: 250,
        TradeSize: 280,
    },
    {
        location: "Profit",
        PNL: 150,
        Leverage: 400,
        TradeSize: 500,
    },
    {
        location: "Profit",
        PNL: 110,
        Leverage: 280,
        TradeSize: 200,
    },
    {
        location: "Loss",
        PNL: 200,
        Leverage: 260,
        TradeSize: 240,
    },
    {
        location: "Loss",
        PNL: 220,
        Leverage: 290,
        TradeSize: 120,
    },
    {
        location: "Loss",
        PNL: 0,
        Leverage: 190,
        TradeSize: 250,
    },
    {
        location: "Profit",
        PNL: 70,
        Leverage: 0,
        TradeSize: 950,
    },
];
type PayloadItem = {
    color: string;
    name: string;
    value: string | number;
};
const customTooltip = ({ payload, active, label }: { payload: PayloadItem[]; active: boolean; label: string }) => {
    if (!active || !payload) return null;
    return (
        <div className="w-48 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border">
            <div className="flex flex-1 space-x-2.5">
                <div className={`w-1.5 flex flex-col bg-${payload[0]?.color}-500 rounded`} />
                <div className="w-full">
                    <p className="mb-2 font-medium text-tremor-content-emphasis">{label}</p>
                    {payload.map((payloadItem, index) => (
                        <div key={index} className="flex items-center justify-between space-x-6">
                            <span className="text-tremor-content">{payloadItem.name}</span>
                            <span className="font-medium tabular-nums text-tremor-content-emphasis">
                                {payloadItem.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
async function getData(query: string) {
    const res = await gql(query)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    return res.json()
}

export default function UserKPIs({ props }: { props: { user: string } }) {
    const [isOpen, setIsOpen] = useState(false)

    const query = `{arkiver2 { Trades (sort: TIMESTAMP_DESC filter: {user: "${props.user}" chainId: 9001 } limit: 500){ _id duration size margin isLong currency productId fee pnl wasLiquidated timestamp}}}`
    // const kpidata = getData(query)
    // console.log(kpidata)
    return (
        <>
            <Col numColSpan={1} className="flex flex-col">
                <Collapsible
                    open={isOpen}
                    onOpenChange={setIsOpen}
                >
                    <Card className="flex-1 bg-background shadow-md rounded-lg">
                        <CollapsibleTrigger asChild>

                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6 hover:cursor-pointer">
                                <h2 className="text-xl font-semibold">Performance Overview</h2>
                                <ChevronDownIcon />
                            </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>

                            <CardContent>
                                <List>
                                    <ListItem key={"heading"} className="font-semibold pb-4">
                                        <span className="w-1/3">Metric</span>
                                        <span className="w-1/3 text-left">Network</span>
                                        <span className="w-1/3">User</span>
                                    </ListItem>
                                    <ListItem key={"win-rate"} className="items-center py-4">
                                        <span className="w-1/3 font-semibold">Win Rate</span>
                                        <span className="w-1/3 text-base text-left font-mono">42%</span>
                                        <span className="w-1/3 text-base items-center inline-flex font-mono">78% <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true} size="xs" className="ml-3 scale-90 origin-center self-center"></BadgeDelta></span>
                                    </ListItem>
                                    <ListItem key={"win-ra2te"} className="items-center py-4">
                                        <span className="w-1/3 font-semibold">Avg PNL</span>
                                        <span className="w-1/3 text-base text-left font-mono">-$6.35</span>
                                        <span className="w-1/3 text-base items-center inline-flex font-mono">$25.53 <BadgeDelta deltaType="increase" isIncreasePositive={true} size="xs" className="ml-3 scale-90 origin-center self-center"></BadgeDelta></span>
                                    </ListItem>
                                    <ListItem key={"win-ra3te"} className="items-center py-4">
                                        <span className="w-1/3 font-semibold">Total PNL</span>
                                        <span className="w-1/3 text-base text-left font-mono">--</span>
                                        <span className="w-1/3 text-base items-center inline-flex font-mono">$85.40 <BadgeDelta deltaType="increase" isIncreasePositive={true} size="xs" className="ml-3 scale-90 origin-center self-center"></BadgeDelta></span>
                                    </ListItem>
                                </List>
                            </CardContent>
                            <CardFooter>
                                <Link href="/ironworks">
                                    <Button variant="secondary">
                                        Detailed Analysis <ArrowRightIcon className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </CollapsibleContent>
                    </Card>
                </Collapsible>
            </Col>
            <Col numColSpan={1} className="flex flex-col">
                <Collapsible
                    open={isOpen}
                    onOpenChange={setIsOpen}
                >
                    <Card className="flex-1 bg-background shadow-md rounded-lg">
                        <CollapsibleTrigger asChild>

                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6 hover:cursor-pointer">

                                <h2 className="text-xl font-semibold">Ape Meter</h2>
                                <ChevronDownIcon />
                            </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>

                            <CardContent>
                                <Flex className="space-x-5" justifyContent="around">
                                    <Col className="space-y-4">
                                        <ProgressCircle value={65} size="lg" color="orange">
                                            <span className="h-20 w-20 rounded-full bg-neutral-200 flex items-center justify-center text-sm text-orange-500 font-medium">
                                                65%
                                            </span>
                                        </ProgressCircle>
                                        <Text className="text-sm font-semibold">Leverage Usage</Text>
                                    </Col>
                                    <Col className="space-y-4">
                                        <ProgressCircle value={22} size="lg" color="yellow">
                                            <span className="h-20 w-20 rounded-full bg-neutral-200 flex items-center justify-center text-sm text-neutral-800 font-medium">
                                                22%
                                            </span>
                                        </ProgressCircle>
                                        <Text className="text-sm font-semibold">Liquidation Ratio</Text>
                                    </Col>
                                    <Col className="space-y-4">
                                        <ProgressCircle value={35} size="lg" color="slate">
                                            <span className="h-20 w-20 rounded-full bg-slate-100 flex items-center justify-center text-sm text-neutral-800 font-medium">
                                                354m
                                            </span>
                                        </ProgressCircle>
                                        <Text className="text-sm font-semibold">Trade Duration</Text>

                                    </Col>
                                </Flex>
                                <Separator className="my-6" />
                                <CategoryBar
                                    values={[25, 25, 25, 25]}
                                    colors={["emerald", "yellow", "orange", "rose"]}
                                    markerValue={44}
                                    className="px-2" />
                                <Legend
                                    className="mt-3 !text-xs align-right text-right"
                                    categories={["Human", "Baby Chimp", "Baboon", "Chief Ape"]}
                                    colors={["emerald", "yellow", "orange", "rose"]}

                                />
                            </CardContent>
                        </CollapsibleContent>
                    </Card>
                </Collapsible>
            </Col>
            <Col numColSpan={1} className="flex flex-col">
                <Collapsible
                    open={isOpen}
                    onOpenChange={setIsOpen}
                >
                    <Card className="flex-1 bg-background shadow-md rounded-lg">
                        <CollapsibleTrigger asChild>

                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6 hover:cursor-pointer">
<h2 className="text-xl font-semibold">Trend Analysis</h2><ChevronDownIcon /></CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>

                            <CardContent>
                                <ScatterChart
                                    className="h-64 -ml-2"
                                    yAxisWidth={25}
                                    data={chartdata2}
                                    category="location"
                                    colors={["red", "emerald", "orange"]}
                                    x="PNL"
                                    y="Leverage"
                                    size="TradeSize"
                                    showLegend={false}
                                    customTooltip={customTooltip}
                                />
                            </CardContent>
                        </CollapsibleContent>
                    </Card>
                </Collapsible>
            </Col>
        </>
    )
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-muted-foreground">
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>

    )
}
