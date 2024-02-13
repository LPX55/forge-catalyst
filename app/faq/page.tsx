/* eslint-disable react/no-unescaped-entities */

import { CardContent, Card, CardHeader, CardFooter } from "@/components/ui/card"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

import { ScrollArea } from "@/components/ui/scroll-area"
import shortenENS, { formatDollarAmount, formatAmount } from "@/lib/helpers"

import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import Phases from "@/components/phases"
import { JSX, SVGProps } from "react"

export const runtime = 'nodejs' // 'nodejs' (default) | 'edge'

export default async function FaqPage() {

  // console.log(aggregatedData)
  return (
    <div key="1" className="dark bg-[#1a1a1a] h-screen text-gray-200 text-sm xl:text-md">
      <div className="flex max-h-screen">
        <Sidebar />
        <main className="flex-1 p-4 text-xs bg-background-secondary">
          <Header breadcrumbs={["Catalyst", "Rules / FAQ"]} />
          <ScrollArea className="px-1 h-calcscreen-header lg:pr-4">
            <Phases />
            <section>

              <Card
                className="h-full bg-background shadow-md rounded-lg px-6 pt-6 w-full overflow-x-clip lg:h-min lg:px-10 lg:pt-10"
              >
                <h2 className="text-3xl font-semibold tracking-wider">Catalyst Phases</h2>
                <Separator className="my-4" />

                <Accordion className="w-full mt-3" type="multiple">
                  <AccordionItem value="item-1" >
                    <AccordionTrigger className="text-lg font-bold hover:underline-none">
                      Round 0: Pre-Contest Warmup
                    </AccordionTrigger>
                    <AccordionContent aria-expanded>Round finished.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-bold hover:underline-none">
                      Round 1: Volume-based Rewards
                    </AccordionTrigger>
                    <AccordionContent aria-expanded>
                      68,000 stEVMOS will be rewarded as volume-based rewards. Any user that trades at least $2,500 worth of volume in the 30-day period will be rewarded with a proportional share of the prize pool.

                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-bold hover:underline-none">
                      Rounds 2-4: PnL-based Rewards
                    </AccordionTrigger>
                    <AccordionContent aria-expanded>
                      In each 30-day period, the top 20 PnL traders will be awarded a total of 87,385 stEVMOS.

                      <Table className="px-0 mt-6">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[140px]">Rank</TableHead>
                            <TableHead className="w-[160px]">Reward</TableHead>
                            <TableHead className="w-[140px]">Rank</TableHead>
                            <TableHead className="w-[160px]">Reward</TableHead>
                            <TableHead className="w-[140px]">Rank</TableHead>
                            <TableHead className="w-[160px]">Reward</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-bold">1st</TableCell>
                            <TableCell className="font-mono">17,000 stEVMOS</TableCell>
                            <TableCell className="font-bold">2nd</TableCell>
                            <TableCell className="font-mono">12,240 stEVMOS</TableCell>
                            <TableCell className="font-bold">3rd</TableCell>
                            <TableCell className="font-mono">8,160 stEVMOS</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-bold">4th</TableCell>
                            <TableCell className="font-mono">6,800 stEVMOS</TableCell>
                            <TableCell className="font-bold">5th</TableCell>
                            <TableCell className="font-mono">4,760 stEVMOS</TableCell>
                            <TableCell className="font-bold">6th-10th</TableCell>
                            <TableCell className="font-mono">3,400 stEVMOS</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-bold">11th-15th</TableCell>
                            <TableCell className="font-mono">2,720 stEVMOS</TableCell>
                            <TableCell className="font-bold">16th-20th</TableCell>
                            <TableCell className="font-mono">1,565 stEVMOS</TableCell>
                            <TableCell className="font-bold">21st+</TableCell>
                            <TableCell className="font-mono">Participation Sticker</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <h2 className="mt-10 text-3xl font-semibold tracking-wider">FAQ</h2>
                <Separator className="my-4" />
                <Accordion className="w-full mt-3" type="multiple">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-bold hover:underline-none">
                      How is trading volume calculated?
                    </AccordionTrigger>
                    <AccordionContent>Trading volume is calculated by your total position size in stEVMOS. </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-bold hover:underline-none">
                    What Does Coin-Margined Mean?
                    </AccordionTrigger>
                    <AccordionContent>
                    Forge Perps/UniDex uses a coin-margined model where the profits or losses are calculated in the unit of the crypto used for margin. For example, if you use 100 stEVMOS as margin and gain a 30% profit you gain 30 stEVMOS, no matter the USD value fluctuation of stEVMOS. A benefit to this is that if the price of stEVMOS drops it doesn't hurt your position and because stEVMOS is a liquid-staked token, in terms of EVMOS value your collateral is constantly growing.

                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-bold hover:underline-none">
                    What Risk is Involved with Supplying Liquidity?
                    </AccordionTrigger>
                    <AccordionContent>
                    When a position is opened, it's tracking the value of the market being traded, such as longing SPY, but it's trading against the liquidity pool of the asset used as collateral, gains come from the Liquidity Pool while losses and fees go to LPs. 
                    </AccordionContent>
                  </AccordionItem> 
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-bold hover:underline-none">
                    How is the Catalyst Program Funded?</AccordionTrigger>
                    <AccordionContent>
                    The Evmos community voted in Prop 256 to approve 495,500 EVMOS from the Community Pool to be used in a 4 month incentives program for the benefit of the ecosystem. 
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <h2 className="my-8 text-3xl font-semibold tracking-wider">Terms and Conditions</h2>
                
        <ScrollArea className="px-4 py-4 text-gray-200 justify-start bg-neutral-900 place-content-start w-full md:w-screen-lg h-[240px]">
          <div id="doc" className="font-mono"><p className="leading-6 mb-4"><span>These Terms of Service (the “Agreement”) explain the terms and conditions by which you may access and use the Products provided by Forge (referred to herein as “Forge”, “we”, “our”, or “us”).  The Products shall include, but shall not necessarily be limited to, (a)  </span><a href="https://forge.trade" target="_blank" rel="noopener"><span>https://forge.trade</span></a><span>, a website-hosted user interface (the “Interface” or “App”), (b) all content and apps hosted under subdomains provided by Forge, including app, perps, and catalyst, (c) any interface or apps provided by our partner UniDex. You must read this Agreement carefully as it governs your use of the Products.</span></p><p className="leading-6 mb-4"><span>By accessing or using any of the Products, you signify that you have read, understand, and agree to be bound by this Agreement in its entirety. If you do not agree, you are not authorized to access or use any of our Products and should not use our Products.</span></p><p className="leading-6 mb-4"><span>These Terms and Conditions govern your participation in the Catalyst Trading Incentives Program (the “Program”). By participating in the Program, you agree to these Terms and Conditions.</span></p><h2 className="pb-2 text-lg font-semibold tracking-wider mt-6" id="Prohibited-Activities" data-id="Prohibited-Activities" ><span>Prohibited Activities</span></h2><p className="leading-6 mb-4"><span>Participants are strictly prohibited from engaging in any form of market manipulation, including but not limited to wash trading, collusive trading, exploiting loopholes, creating multiple accounts, automated or algorithmic manipulation, front running, and pump and dump schemes.</span></p><p className="leading-6 mb-4"><span>Any attempt to artificially inflate trading volume or manipulate market prices is strictly prohibited and will result in immediate disqualification from the Program.</span></p><h2 className="pb-2 text-lg font-semibold tracking-wider mt-6" id="Fair-Play" data-id="Fair-Play" ><span>Fair Play</span></h2><p className="leading-6 mb-4"><span>Participants must adhere to the principles of fair play. Any form of cheating, fraud, or other dishonest behavior will lead to disqualification from the Program and may result in further spanking and public humiliation.</span></p><h2 className="pb-2 text-lg font-semibold tracking-wider mt-6" id="Monitoring-and-Enforcement" data-id="Monitoring-and-Enforcement" ><span>Monitoring and Enforcement</span></h2><p className="leading-6 mb-4"><span>Forge will monitor both on-chain and off-chain data for trading activity that is deemed suspicious or irregular behavior. Forge reserves the right to disqualify any participant found to be in violation of these Terms and Conditions.</span></p><p>
            <span>Decisions made by Forge regarding disqualification can be appealed through an appeal via our governance process.</span></p><h2 className="pb-2 text-lg font-semibold tracking-wider mt-6" id="Rewards" data-id="Rewards" ><span>Rewards</span></h2><p className="leading-6 mb-4"><span>Rewards will be distributed in accordance with the rules and criteria set forth for the Program in Evmos Prop 256.</span></p><p className="leading-6 mb-4"><span>The Catalyst multi-sig will distribute rewards in a timely manner after each period is over and participation has been calculated by Forge.</span></p><h2 className="pb-2 text-lg font-semibold tracking-wider mt-6" id="Liability-and-Indemnification" data-id="Liability-and-Indemnification" ><span>Liability and Indemnification</span></h2><p className="leading-6 mb-4"><span>Forge is not responsible for any loss or damage incurred by participants as a result of their participation in the Program.</span></p><p className="leading-6 mb-4"><span>Participants agree to indemnify and hold harmless Forge and its affiliates, officers, and agents from any claim or demand made by any third party due to or arising out of their participation in the Program.</span></p><h2 className="pb-2 text-lg font-semibold tracking-wider mt-6" id="Restricted-Use" data-id="Restricted-Use" ><span>Restricted Use</span></h2><p className="leading-6 mb-4"><span>You represent that you are not a citizen, resident, or organized in a jurisdiction or territory that is the subject of comprehensive country-wide, territory-wide, or regional economic sanctions by the U.N. Security Council.</span></p><p className="leading-6 mb-4"><span>That means you, Kim.</span></p><h2 className="pb-2 text-lg font-semibold tracking-wider mt-6" id="Amendments" data-id="Amendments" ><span>Amendments</span></h2><p className="leading-6 mb-4"><span>Forge reserves the right to amend these Terms and Conditions at any time without prior notice.</span></p></div>
            
        </ScrollArea>
              </Card>

            </section>
          </ScrollArea>

        </main>
      </div>
    </div>
  )
}
