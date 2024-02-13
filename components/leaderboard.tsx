'use client'
import { useEffect, useState } from 'react'
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { CardContent, Card, CardHeader, CardFooter } from "@/components/ui/card"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import { SparkAreaChart, SparkLineChart, SparkBarChart } from "@tremor/react";
import shortenENS, { formatDollarAmount, formatAmount } from "@/lib/helpers"
import { SearchIcon, DotIcon, UserIcon } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const chartdata = [
  {
    month: "Jan 21",
    Performance: 4000,
    "Benchmark": 3000,
  },
  {
    month: "Feb 21",
    Performance: 3000,
    "Benchmark": 2000,
  },
  {
    month: "Mar 21",
    Performance: 2000,
    "Benchmark": 1700,
  },
  {
    month: "Apr 21",
    Performance: 2780,
    "Benchmark": 2500,
  },
  {
    month: "May 21",
    Performance: 1890,
    "Benchmark": 1890,
  },
  {
    month: "Jun 21",
    Performance: 2390,
    "Benchmark": 2000,
  },
  {
    month: "Jul 21",
    Performance: 3490,
    "Benchmark": 3000,
  },
];

export function Leaderboard({ data, sortKey }: { data: any, sortKey: keyof typeof sortFunctions }) {
  type Item = {
    pnl: number;
    pnlUsd: number;
    margin: number;
    marginUsd: number;
    size: number;
    sizeUsd: number;
    feeUsd: number;
    avgSizeUsd: number;
    avgDuration: number;
    trades: number;
    tradeCount: number;
    wins: number;
    losses: number;
    winLossRatio: number;
    liqCount: number;
    liquidations: number;
    nickname: string;
    avatar?: string;
    volumePercentage: number;

    // Add this line

  };
  type CurrentItemsType = [string, Item];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState(1); // 1 for ascending, -1 for descending
  const [currentSortKey, setCurrentSortKey] = useState(sortKey);
  const rewards: { [key: number]: number } = {
    1: 17000,
    2: 12240,
    3: 8160,
    4: 6800,
    5: 4760,
    6: 3400,
    7: 3400,
    8: 3400,
    9: 3400,
    10: 3400,
    11: 2720,
    12: 2720,
    13: 2720,
    14: 2720,
    15: 2720,
    16: 1565,
    17: 1565,
    18: 1565,
    19: 1565,
    20: 1565
  };
  const itemsPerPage = 10;
  type DataType = [string, {
    pnl: number;
    pnlUsd: number;
    margin: number;
    marginUsd: number;
    size: number;
    sizeUsd: number;
    avgSizeUsd: number;
    avgDuration: number;
    feeUsd: number;
    trades: number;
    tradeCount: number;
    wins: number;
    losses: number;
    liqCount: number;
    winLossRatio: number;
    liquidations: number;
    volumePercentage: number;
    nickname: string;
    avatar?: string;
  }];
  type DataObjectType = { [key: string]: Item };
  const typedData = data as DataObjectType;

  const sortFunctions = {
    size: (a: DataType, b: DataType) => b[1].size - a[1].size,
    sizeUsd: (a: DataType, b: DataType) => b[1].sizeUsd - a[1].sizeUsd,
    pnlUsd: (a: DataType, b: DataType) => b[1].pnlUsd - a[1].pnlUsd,
    liquidations: (a: DataType, b: DataType) => b[1].pnlUsd - a[1].pnlUsd,
    // Add more sort functions as needed
  };

  // Get the sort function based on the sortKey prop
  const sort = sortFunctions[sortKey];

  // Convert data object to array
  const dataArray = Object.entries(typedData).sort((a, b) => sortDirection * sort(a, b)) as DataType[];
  const filteredData = dataArray.filter(([user, item]) => user.includes(searchTerm) || item.nickname.includes(searchTerm)) as CurrentItemsType[];

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Get current items
  const currentItems: CurrentItemsType[] = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  }
  useEffect(() => {
    if (sortKey === currentSortKey) {
      setSortDirection(prevSortDirection => prevSortDirection * 1); // Toggle sort direction
    } else {
      setCurrentSortKey(sortKey);
      setSortDirection(1); // Reset sort direction to ascending
    }
  }, [sortKey, currentSortKey, sortDirection]);
  return (

    <>
      <div className="relative w-screen max-w-[80vw] mb-2 lg:w-full ">
        <Input className="pl-10" placeholder="Search by wallet address or Evmos Domains handle..." type="text" onChange={e => setSearchTerm(e.target.value)} />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <SearchIcon className="h-4 w-4" />
        </div>
      </div>
      <Table>
        <TableHead>
          <TableRow className="font-bold">
            <TableHeaderCell className="text-xs text-gray-200">#</TableHeaderCell>
            <TableHeaderCell className="text-xs text-gray-200">Trader</TableHeaderCell>
            <TableHeaderCell className="text-xs text-gray-200">{sortKey === 'pnlUsd' && <DotIcon className="text-green-500 inline w-4 h-4 self-center animate-pulse" />} PNL <span className="ml-1 text-[0.6rem] text-gray-400">(USD)</span></TableHeaderCell>
            <TableHeaderCell className="text-xs text-gray-200">Wins / Loss / Liq.</TableHeaderCell>
            <TableHeaderCell className="text-xs text-gray-200">Avg Time</TableHeaderCell>
            <TableHeaderCell className="text-xs text-gray-200">Avg Size</TableHeaderCell>
            <TableHeaderCell className="text-xs text-gray-200">Fees Paid</TableHeaderCell>
            <TableHeaderCell className="text-xs text-gray-200">Margined</TableHeaderCell>
            <TableHeaderCell className="text-xs text-gray-200">{sortKey === 'sizeUsd' && <DotIcon className="text-green-500 inline w-4 h-4 self-center animate-pulse" />}Volume</TableHeaderCell>
            <TableHeaderCell className="text-xs text-gray-200">{sortKey === 'size' && <DotIcon className="text-green-500 inline w-4 h-4 self-center animate-pulse" />}Volume <Image src="/stevmos.png" width={16} height={16} alt="stEVMOS" className="inline" /></TableHeaderCell>
            <TableHeaderCell className="text-xs text-gray-200 items-center">
              <TooltipProvider><Tooltip><TooltipTrigger><span>Est. Rewards</span> <QuestionIcon /></TooltipTrigger>
                <TooltipContent><p>Unrealized rewards earned in proportion<br />to trading volume as of now.</p></TooltipContent></Tooltip></TooltipProvider></TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentItems
            .map(([user, { pnl, pnlUsd, size, sizeUsd, avgSizeUsd, avatar, avgDuration, feeUsd, margin, marginUsd, trades, tradeCount, wins, losses, liqCount, volumePercentage, nickname }], index) => (
              <TableRow key={index} className="hover:cursor-select">
                <TableCell className="text-xs text-gray-200">{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
                <TableCell className="text-xs text-gray-200 items-center font-semibold hover:text-orange">
                  {avatar ? (
                    <Link href={`/profile/${nickname}`} className="text-sm text-orange hover:text-orange">
                      <Avatar className="h-6 w-6 inline">
                        <AvatarImage alt="User avatar" src={avatar} className="h-5 w-5 inline-flex rounded-full mr-2 self-center duration-100	delay-75 hover:scale-150" />
                        <AvatarFallback></AvatarFallback>
                      </Avatar>
                    </Link>
                  ) : (
                    <></>
                  )}
                  {nickname !== "" ? (
                    <Link href={`/profile/${nickname}`} className="text-sm text-orange hover:text-orange ">
                      <span className="self-center hover:underline  duration-100	delay-75 ">{nickname}</span>
                    </Link>
                  ) : <><Link className="inline-flex self-center hover:underline" href={`/history/${user}`} >{shortenENS(user)}</Link></>}
                </TableCell>
                <TableCell className={`text-sm font-mono font-medium ${pnlUsd < 0 ? 'text-red-500' : 'text-green-500'}`}>
                  {formatDollarAmount(Math.abs(pnlUsd))} ({((pnlUsd / marginUsd) * 100).toFixed(2)}%)
                </TableCell>
                {/* <TableCell className="text-xs text-gray-200">
                  <SparkAreaChart
                    data={chartdata}
                    categories={["Performance"]}
                    index={"month"}
                    colors={["emerald"]}
                    className="h-10 w-36"
                  />
                </TableCell> */}
                <TableCell className="text-xs text-gray-200">
                  <Badge variant="outline" className="w-10 bg-green-600 justify-center text-neutral-900 rounded-none font-mono">{wins}</Badge>
                  <Badge variant="outline" className="w-10 bg-red-500 text-neutral-900 rounded-none justify-center font-mono">{losses}</Badge>
                  <Badge variant="outline" className="w-10 bg-yellow-600 text-neutral-900 rounded-none justify-center font-mono">{liqCount}</Badge>
                </TableCell>
                <TableCell className="text-xs text-gray-200">{avgDuration.toFixed(1)} <span className="text-[0.675rem] tracking-tight">min.</span></TableCell>

                <TableCell className="text-xs text-gray-200">{formatDollarAmount(avgSizeUsd)}</TableCell>
                <TableCell className="text-xs text-gray-200">{formatDollarAmount(feeUsd)}</TableCell>
                <TableCell className="text-xs text-gray-200"><span className="mr-1">{formatDollarAmount(marginUsd)}</span> ({formatAmount(margin)} <Image src="/stevmos.png" width={16} height={16} alt="stEVMOS" className="inline" />)</TableCell>
                <TableCell className="text-xs text-gray-200">{formatDollarAmount(sizeUsd)}
                </TableCell>
                <TableCell className="text-xs text-gray-200">{formatAmount(size)} <Image src="/stevmos.png" width={16} height={16} alt="stEVMOS" className="inline" /></TableCell>
                <TableCell className="text-xs text-gray-200">{rewards.hasOwnProperty(index+1) ? rewards[index+1] : 0} <Image src="/stevmos.png" width={16} height={16} alt="stEVMOS" className="inline" /></TableCell>              
                </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="flex justify-center mt-4">
        <Button className="mx-1" size="sm" variant="outline" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </Button>
        {[...Array(totalPages)].map((_, index) => (
          <Button className="mx-1" size="sm" variant="outline" onClick={() => handlePageChange(index + 1)} key={index}>
            {index + 1}
          </Button>
        ))}
        <Button className="mx-1" size="sm" variant="outline" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
      <CardFooter className="grid mt-4 pt-2">

      <div className="relative w-full">
        <div className="w-full absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground font-semibold">
            DISCLAIMER
          </span>
        </div>
      </div>
      <div className="block mt-4 w-full">
        <p className="mt-2">
          The data presented in this table may not always be accurate or may be oudated. There will be a human review of the data at the end of each round. Accounts may be disqualified from the competition for wash-trading and/or misconduct. For more information please refer to the <Link href="/faq">FAQ page.</Link>
        </p>
      </div>
      </CardFooter>
    </>

  )
}


function IconLinkExternal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M13 3l3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z" />
      <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z" />
    </svg>
  );
}
function QuestionIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 inline">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
    </svg>

  )
}


function AwardIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}


function BitcoinIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  )
}


function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}


function RulerIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
      <path d="m14.5 12.5 2-2" />
      <path d="m11.5 9.5 2-2" />
      <path d="m8.5 6.5 2-2" />
      <path d="m17.5 15.5 2-2" />
    </svg>
  )
}


function FishIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
      <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
      <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
    </svg>
  )
}


function WalletIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  )
}


function ImageIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function DropletsIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
  )
}


function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function DollarSignIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
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


function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function LineChartIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}


function ArrowUpDownIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  )
}

function BeakerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#e14c33" className="w-3 h-3 inline">
      <path fillRule="evenodd" d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 0 0 1.075.676L10 15.082l5.925 2.844A.75.75 0 0 0 17 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0 0 10 2Z" clipRule="evenodd" />
    </svg>


  )
}
