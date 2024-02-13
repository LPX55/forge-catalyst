"use client"
import { Title, AreaChart, BadgeDelta, Flex, DeltaType } from "@tremor/react";
import { CardContent, Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { SparkAreaChart, SparkLineChart, SparkBarChart } from "@tremor/react";
import { formatDollarAmount, formatUnits } from '@/lib/helpers';


import { gql } from '../../grafbase'
import { useEffect, useState } from "react";

interface UniDayData {
    id: string;
    date: number;
    volumeETH: string;
    volumeUSD: string;
    feesUSD: string;
    txCount: string;
    tvlUSD: string;
}
async function getDayData(limit: number = 720, tag: string) {

    const query = `query GetDayDatas($limit: Int!) {
        forge {
          uniswapDayDatas(
            subgraphError: allow
            orderBy: date
            orderDirection: desc
            first: $limit
          ) {
            id
            date
            volumeETH
            volumeUSD
            feesUSD
            txCount
            tvlUSD
          }
        }
      }
      `;
    const variables = { limit };
    try {
        const data = await gql(query, variables, tag);
        // If there's an error field in the response, return the address
        if (data.error) {
            console.error(data.error)
            return "";
        }
        console.log(data)
        // Otherwise, return the name
        return data;
    } catch (error) {
        console.error(error)
        // If there's an error in the fetch operation, return the address
        return "";
    }
}
export default function DayDatasView() {
    const [dailyData, setDailyData] = useState<UniDayData[]>([{ "id": "19759", "date": 1707177600, "volumeETH": "716818.1449358482279733575258873153", "volumeUSD": "71908.29256997108356777742096136737", "feesUSD": "99.74986276284400126884544322429655", "txCount": "541742", "tvlUSD": "2229260.526188361091744526839366929" }]);

    useEffect(() => {
        getDayData(30, "DayDatas")
            .then((data: { forge: { uniswapDayDatas: UniDayData[] } }) => {
                if (data.forge && data.forge.uniswapDayDatas) {
                    const dayDatasMap = data.forge.uniswapDayDatas.map((item: UniDayData) => ({
                        id: item.id,
                        date: item.date,
                        volumeETH: item.volumeETH,
                        volumeUSD: item.volumeUSD,
                        feesUSD: item.feesUSD,
                        txCount: item.txCount,
                        tvlUSD: item.tvlUSD,
                    })).reverse();
                    setDailyData(dayDatasMap);
                } else {
                    console.log(data);
                    console.error('data.forge.tokenHourDatas is undefined');
                }
            })
            .catch((error: any) => {
                console.error(error);
            });
    }, []);

    const sumVolumeUSD = dailyData.slice(0, 30).reduce((sum, item) => sum + parseFloat(item.volumeUSD), 0);


    return (
        <Flex flexDirection="row" className="mb-8 gap-8">
            <Card className="bg-neutral-900 rounded-sm h-48 w-1/2">
                <CardHeader>
                <Flex alignItems="start" justifyContent="between" className="">
                <Title className="text-[1.1rem] font-semibold">DEX Volume <span className="text-sm font-normal font-mono tracking-tight">(30d)</span></Title>
                <Title className="text-lg inline-flex"><span className="inline align-start vertical-top mr-2 font-mono">{formatDollarAmount(sumVolumeUSD)}</span> 
                  </Title>
                </Flex>
                </CardHeader>
                <CardContent>
                    <SparkAreaChart
                        data={dailyData}
                        categories={["volumeUSD", "feesUSD"]}
                        index={"date"}
                        colors={["orange", "#ffcc33"]}
                        className="h-24 w-full"
                        showGradient
                        stack

                    />
                </CardContent>
            </Card>
            <Card className="bg-neutral-900 rounded-sm h-48 w-1/2">
            <CardHeader>
                <Flex alignItems="start" justifyContent="between" className="">
                <Title className="text-[1.1rem] font-semibold">TVL <span className="text-sm font-normal font-mono tracking-tight">(tracked)</span></Title>
                <Title className="text-lg inline-flex"><span className="inline align-start vertical-top mr-2 font-mono">{formatDollarAmount(Number(dailyData[0].tvlUSD))}</span> 
                  </Title>
                </Flex>
                </CardHeader>
                <CardContent>
                    <SparkAreaChart
                        data={dailyData}
                        categories={["tvlUSD", "feesUSD"]}
                        index={"date"}
                        colors={["orange", "#ffcc33"]}
                        className="h-24 w-full"
                        showGradient
                        stack
                        

                    />
                </CardContent>
            </Card>
        </Flex>
    )

}
