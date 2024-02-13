'use server'

import { Button, BarChart, Bold, Card, Callout, List, ListItem, Metric, Text, Tracker, Title, BarList, ProgressBar, Flex, Grid } from "@tremor/react";
import { ArrowNarrowRightIcon, TrendingUpIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { Badge } from "@/components/ui/badge"
import { gql } from '../../app/grafbase'
import shortenENS, { formatDollarAmount, formatAmount } from "@/lib/helpers"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Btc } from "@/components/icons/svg";
import { getAssetUrl }  from "@/lib/tokenImage"
import { Events, Product, DayProduct, TokenPrice } from '@/lib/types';
import Link from 'next/link'

const shop = [
    { name: "BTC-USD", value: 453 },
    { name: "ATOM-USD", value: 351 },
    { name: "AVAX-USD", value: 271 },
    { name: "CRV-USD", value: 191 },
    { name: "ETH-USD", value: 190 },
];



const events: Events[] = [
    {
        name: "Round 1",
        date: "Jan. 3rd 2024",
        amount: "68,000",
        denom: "stEVMOS"
    },
    {
        name: "Round 2",
        date: "Feb. 1st 2024",
        amount: "87,385",
        denom: "stEVMOS"
    },
    {
        name: "Round 3",
        date: "Mar. 1st 2024",
        amount: "87,385",
        denom: "stEVMOS"
    },
];
async function fetchPrice(): Promise<TokenPrice[]> {
    try {
        const res = await fetch('https://api.geckoterminal.com/api/v2/simple/networks/evmos/token_price/0x2C68D1d6aB986Ff4640b51e1F14C716a076E44C4%2C0xd4949664cd82660aae99bedc034a0dea8a0bd517', { next: { revalidate: 300 } })
        if (!res.ok) {
            return []; // Return an empty array if fetch fails
        }
        const data = await res.json();
        const tokenPrices = data.data.attributes.token_prices

        const tokenMapping: { [key: string]: string } = {
            '0x2c68d1d6ab986ff4640b51e1f14c716a076e44c4': 'stEVMOS',
            '0xd4949664cd82660aae99bedc034a0dea8a0bd517': 'EVMOS'
        };
        const tokenPricesArray = Object.entries(tokenPrices).map(([key, value]) => ({
            token: tokenMapping[key],
            price: Number(value)
        }));

        return tokenPricesArray;
    } catch (error) {
        console.log(error);
        return []; // Return an empty object if an error occurs
    }
}
// const valueFormatter = (number: number) => `${Intl.NumberFormat("us").format(number).toString()}`;

export default async function MarketKPIsCard() {
    'use server'
    const testLogo = getAssetUrl("0x2c68d1d6ab986ff4640b51e1f14c716a076e44c4")
    
    const query = `{ arkiver2 { Products(filter: {chainId: 9001} sort: CUMULATIVEVOLUME_DESC) { _id cumulativeFeesUsd cumulativePnlUsd cumulativeVolumeUsd cumulativeLiquidationsUsd openInterestUsd positionCount tradeCount } } }`
    const queryMacro = `{ arkiver2 { DayProducts(filter: {chainId: 9001} sort: DATE_DESC limit: 500) { cumulativePnlUsd cumulativeLiquidationsUsd date _id } } }`
    const data = await gql(query)
    const macroData = await gql(queryMacro)
    const markets = data.arkiver2.Products.map((product: Product) => ({
        name: product._id.split(':')[0],
        value: product.cumulativeVolumeUsd,
        // icon: Btc
    }));
    const priceData = await fetchPrice()
    const stData = priceData.find(token => token.token === 'stEVMOS') as TokenPrice;
    const dates = macroData.arkiver2.DayProducts.map((product: DayProduct) => new Date(product.date * 1000));

    const groupedByDate: Record<string, DayProduct[]> = macroData.arkiver2.DayProducts.reduce((acc: any, product: DayProduct) => {
        const date = new Date(product.date * 1000).toISOString().split('T')[0];
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(product);
        return acc;
    }, {} as Record<string, DayProduct[]>);

    const accumulatedData = Object.entries(groupedByDate).map(([date, products]: [string, DayProduct[]]) => {
        const cumulativePnlUsd = products.reduce((sum, product) => sum + product.cumulativePnlUsd, 0);
        const cumulativeLiquidationsUsd = products.reduce((sum, product) => sum + product.cumulativeLiquidationsUsd, 0);
        return {
            date,
            cumulativePnlUsd,
            cumulativeLiquidationsUsd
        };
    });

    const accumulatedDataArray = Object.values(accumulatedData);

    const barData = accumulatedDataArray.map((item: any) => {
        const day = new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const profit = item.cumulativePnlUsd > 0 ? item.cumulativePnlUsd : 0;
        const loss = item.cumulativePnlUsd < 0 ? -item.cumulativePnlUsd : 0;
        const liquidations = -item.cumulativeLiquidationsUsd;

        return {
            Profit: profit,
            Loss: -loss,
            Liquidations: liquidations,
            day: day
        };
    }); const marketData = [
        {
            category: "Top Performing Markets",
            stat: "48",
            data: markets,
        }
    ];
    const marketTypes = [
        {
            title: "Crypto",
            metric: "24",
        },
        {
            title: "Forex",
            metric: "4",
        },
        {
            title: "Stock",
            metric: "5",
        },
        {
            title: "Misc",
            metric: "3",
        },
    ];
    const miscData = [
        {
            category: "Network vs. Market Performance",
            stat: "12,543",
            data: shop,
        }
    ]
    const barCategories = [
        'Profit',
        'Loss',
        // 'Liquidations'
    ]
    // const barData = [
    //     {
    //       Profit: 0,
    //       Loss: 4000,
    //       Liquidations: 3000,
    //       day: 'Jan 21'
    //     },
    //     {
    //       Profit: 0,
    //       Loss: 3000,
    //       Liquidations: 2000,
    //       day: 'Jan 22'
    //     },
    //     {
    //       Profit: 0,
    //       Loss: 2000,
    //       Liquidations: 1700,
    //       day: 'Jan 23'
    //     },
    //     {
    //       Profit: 0,
    //       Loss: 2780,
    //       Liquidations: -2500,
    //       day: 'Jan 24'
    //     },
    //     {
    //       Profit: 0,
    //       Loss: 1890,
    //       Liquidations: -1890,
    //       day: 'Jan 25'
    //     },
    //     {
    //       Profit: 0,
    //       Loss: 2390,
    //       Liquidations: -2000,
    //       day: 'Jan 26'
    //     },
    //     {
    //       Profit: 0,
    //       Loss: 100,
    //       Liquidations: -3000,
    //       day: 'Jan 27'
    //     }
    //   ]

    return (
        <Grid numItemsSm={1} numItemsLg={3} className="gap-6">
            <Card>
                <Title><Bold>Catalyst</Bold> Community-Funded Rewards</Title>

                <Callout
                    color="emerald"
                    className="mt-6 pt-1 text-neutral-300"
                    title=""
                >

                    The Evmos Community has approved ~336,955 stEVMOS in funding for trading incentives on Forge Perpetuals. <Link href="/faq">Learn more <ArrowNarrowRightIcon className="inline h-5 w-5 self-center" /></Link>
                </Callout>
                <ProgressBar value={1} color="emerald" className="mt-6" />
                <Flex className="mt-4">
                    <div>
                        <Text><Bold>Allocated Rewards</Bold></Text>
                        <Text>
                            <Bold className="text-white text-xl font-mono">336,955</Bold> stEVMOS{" "}
                        </Text>
                        {/* <Text>
                            <Bold className="text-neutral-500 text-sm  font-mono">{formatDollarAmount(336955 * stData.price)}</Bold>{" "}
                        </Text> */}
                    </div>
                    <div>
                        <Text className="text-right text-neutral-200"><Bold>Amount Distributed</Bold></Text>
                        <Text className="text-right">
                            <Bold className="text-white text-xl font-mono">0%</Bold>{" "}
                        </Text>
                    </div>
                </Flex>
                <Flex className="mt-6">
                    <Text>
                        <Bold>Upcoming Events</Bold>
                    </Text>
                    <Text>
                        <Bold>Est. Disbursement</Bold>
                    </Text>
                </Flex>
                <List className="mt-1">
                    {events.map((item) => (
                        <ListItem key={item.name}>
                            <p className="text-neutral-200"><Badge variant="secondary" className="hidden md:inline-flex bg-orange-500 text-neutral-200 rounded-sm mr-2 px-3">{item.name}</Badge> {item.date}</p>
                            <p className="text-neutral-200 font-semibold">{item.amount} <span className="inline font-normal text-neutral-300">{item.denom}</span></p>
                        </ListItem>
                    ))}
                </List>

            </Card>
            {marketData.map((item) => (
                <Card key={item.category}>
                    <Title>{item.category}</Title>
                    <Grid numItemsSm={2} numItemsLg={4} className="mt-6 gap-3">
                        {marketTypes.map((item) => (
                            <Card key={item.title} className="px-3 py-2 self-center">
                                <Text className="text-xs self-center">{item.title} <span className="text-base font-bold font-mono inline-flex justify-end text-right absolute right-4 bottom-[5px] self-center">{item.metric}</span></Text>
                            </Card>
                        ))}
                    </Grid>
                    <Flex className="mt-6 pr-4">
                        <Text>Market</Text>
                        <Text className="text-right">Volume</Text>
                    </Flex>
                    <ScrollArea className="h-[260px] pr-4">

                        <BarList
                            data={item.data}
                            color={"gray"}
                            valueFormatter={formatDollarAmount}
                            className="mt-3"
                        />
                    </ScrollArea>
                </Card>

            ))}
            {miscData.map((item) => (
                <Card key={item.category}>
                    <Title>{item.category}</Title>
                    <BarChart
                        categories={barCategories}
                        colors={["green", "orange", "amber"]}
                        className="h-80 mt-8"
                        data={barData}
                        index="day"
                        stack
                    />
                </Card>
            ))}
        </Grid>
    );
}
