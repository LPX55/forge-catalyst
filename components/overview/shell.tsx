import {
  Card,
  Grid,
  Title,
  Text,
} from "@tremor/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import KPICards from './kpi-network'
import MarketKPIsCard from './kpi-markets'
import { Suspense } from 'react'
import { Button } from "../ui/button";
import marketrefresh from "../../app/actions"
import { RefreshButton } from "../refreshbtn";
export async function Shell() {

  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="gap-2">
          <Title className="text-2xl font-semibold">Perpetuals Overview</Title>
          <Text>Data for our perpetuals markets and DEX are handled completely separately.</Text>
        </div>
        <div className="inline-flex">
          <form action={marketrefresh}>
            <RefreshButton />
          </form>
          <Select>
            <SelectTrigger className="w-[160px] bg-neutral-800">
              <SelectValue placeholder="Past 30 days" />
            </SelectTrigger>
            <SelectContent className="bg-neutral-800">
              <SelectItem value="wk" disabled>Past week</SelectItem>
              <SelectItem value="mo">Past 30 days</SelectItem>
              <SelectItem value="qt" disabled>Past 90 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Grid numItemsMd={1} numItemsLg={1} className="gap-6">
        <Suspense fallback={<Loading />}>
          <KPICards />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <MarketKPIsCard />
        </Suspense>
      </Grid>
      {/* <Title className="mt-8 text-2xl font-semibold">Liquidation Trends</Title>
        <Text>Data for our perpetuals markets and DEX are handled completely separately. For DEX data refer to this page. </Text> */}
      {/* <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
                <Card>
                <div className="h-28" />
                </Card>
                <Card>
              
                  <div className="h-28" />
                </Card>
                <Card>
              
                  <div className="h-28" />
                </Card>
              </Grid>
              <div className="mt-6">
                <Card>
                  <div className="h-80" />
                </Card>
              </div> */}
    </>
  );
}
function RefreshIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  )
}

function Loading() {
  return (
    <div className="p-10 w-screen animate-pulse self-center place-content-center items-center mx-auto text-center">
      <h1 className="text-2xl animate-pulse text-center mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="animate-spin w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
        </svg>
      </h1>
    </div>
  );
}