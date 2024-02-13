/* eslint-disable react-hooks/rules-of-hooks */

"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardFooter, CardHeader, CardDescription } from "@/components/ui/card"
import { Separator } from "./ui/separator"

interface DisclaimerProps {
  agreed: boolean;
}

export default function disclaimer({ agreed }: DisclaimerProps) {
  "use client"
  const router = useRouter();
  const pledged = Cookies.get('pledged');

  router.prefetch('/markets/overview');

  useEffect(() => {
    const isBrowser = () => typeof window !== 'undefined';
    if (isBrowser()) { //Only add the event listener client-side
      router.prefetch('/markets/overview');
    }
    if (agreed || pledged) {
      router.push('/markets/overview'); // Redirect to homepage if user has agreed to the terms
    }
  }, [agreed, router, pledged]);

  const handleAgree = () => {
    Cookies.set('pledged', 'true', { expires: 365 }); // Set 'agreed' cookie to 'true' for 1 year
    router.push('/markets/overview'); // Redirect to homepage
  };

  return (
    <Card

      className="disclaimer flex flex-col items-start align-center justify-center w-full overflow-y-hidden h-min z-10 py-2 px-8 mx-auto bg-background/75 md:items-center md:my-auto md:bg-background/90 md:w-2/3 lg:w-1/2 scale-[0.8]"
    >
      <CardHeader className="justify-start align-start">
        <h1 className="font-medium font-mono tracking-wider text-xl place-self-start lg:text-3xl">THE CATALYST PLEDGE</h1>
      </CardHeader>
      <CardDescription className="text-center text-gray-200">
        All users must agree to the terms below before continuing.
      </CardDescription>
      <Separator className="my-6" />
      <CardContent>
        <ScrollArea className="px-0 py-4 text-gray-200 justify-start place-content-start w-full md:w-screen-lg h-[240px]">
          <div id="doc" className="font-mono"><h2 className="pb-2 text-lg font-semibold tracking-wider" id="Introduction" data-id="Introduction" ><span>Introduction</span></h2><p className="leading-6 mb-4"><span>These Terms of Service (the “Agreement”) explain the terms and conditions by which you may access and use the Products provided by Forge (referred to herein as “Forge”, “we”, “our”, or “us”).  The Products shall include, but shall not necessarily be limited to, (a)  </span><a href="https://forge.trade" target="_blank" rel="noopener"><span>https://forge.trade</span></a><span>, a website-hosted user interface (the “Interface” or “App”), (b) all content and apps hosted under subdomains provided by Forge, including app, perps, and catalyst, (c) any interface or apps provided by our partner UniDex. You must read this Agreement carefully as it governs your use of the Products.</span></p><p className="leading-6 mb-4"><span>By accessing or using any of the Products, you signify that you have read, understand, and agree to be bound by this Agreement in its entirety. If you do not agree, you are not authorized to access or use any of our Products and should not use our Products.</span></p><p className="leading-6 mb-4"><span>These Terms and Conditions govern your participation in the Catalyst Trading Incentives Program (the “Program”). By participating in the Program, you agree to these Terms and Conditions.</span></p><h2 className="pb-2 text-lg font-semibold tracking-wider mt-6" id="Prohibited-Activities" data-id="Prohibited-Activities" ><span>Prohibited Activities</span></h2><p className="leading-6 mb-4"><span>Participants are strictly prohibited from engaging in any form of market manipulation, including but not limited to wash trading, collusive trading, exploiting loopholes, creating multiple accounts, automated or algorithmic manipulation, front running, and pump and dump schemes.</span></p><p className="leading-6 mb-4"><span>Any attempt to artificially inflate trading volume or manipulate market prices is strictly prohibited and will result in immediate disqualification from the Program.</span></p><h2 className="pb-2 text-lg font-semibold tracking-wider mt-6" id="Fair-Play" data-id="Fair-Play" ><span>Fair Play</span></h2><p className="leading-6 mb-4"><span>Participants must adhere to the principles of fair play. Any form of cheating, fraud, or other dishonest behavior will lead to disqualification from the Program and may result in further spanking and public humiliation.</span></p><h2 className="pb-2 text-lg font-semibold tracking-wider mt-6" id="Monitoring-and-Enforcement" data-id="Monitoring-and-Enforcement" ><span>Monitoring and Enforcement</span></h2><p className="leading-6 mb-4"><span>Forge will monitor both on-chain and off-chain data for trading activity that is deemed suspicious or irregular behavior. Forge reserves the right to disqualify any participant found to be in violation of these Terms and Conditions.</span></p><p>
            <span>Decisions made by Forge regarding disqualification can be appealed through an appeal via our governance process.</span></p><h2 className="pb-2 text-lg font-semibold tracking-wider mt-6" id="Rewards" data-id="Rewards" ><span>Rewards</span></h2><p className="leading-6 mb-4"><span>Rewards will be distributed in accordance with the rules and criteria set forth for the Program in Evmos Prop 256.</span></p><p className="leading-6 mb-4"><span>The Catalyst multi-sig will distribute rewards in a timely manner after each period is over and participation has been calculated by Forge.</span></p><h2 className="pb-2 text-lg font-semibold tracking-wider mt-6" id="Liability-and-Indemnification" data-id="Liability-and-Indemnification" ><span>Liability and Indemnification</span></h2><p className="leading-6 mb-4"><span>Forge is not responsible for any loss or damage incurred by participants as a result of their participation in the Program.</span></p><p className="leading-6 mb-4"><span>Participants agree to indemnify and hold harmless Forge and its affiliates, officers, and agents from any claim or demand made by any third party due to or arising out of their participation in the Program.</span></p><h2 className="pb-2 text-lg font-semibold tracking-wider mt-6" id="Restricted-Use" data-id="Restricted-Use" ><span>Restricted Use</span></h2><p className="leading-6 mb-4"><span>You represent that you are not a citizen, resident, or organized in a jurisdiction or territory that is the subject of comprehensive country-wide, territory-wide, or regional economic sanctions by the U.N. Security Council.</span></p><p className="leading-6 mb-4"><span>That means you, Kim.</span></p><h2 className="pb-2 text-lg font-semibold tracking-wider mt-6" id="Amendments" data-id="Amendments" ><span>Amendments</span></h2><p className="leading-6 mb-4"><span>Forge reserves the right to amend these Terms and Conditions at any time without prior notice.</span></p></div>
            
        </ScrollArea>
      </CardContent>
      <Separator className="mb-6" />
      <CardFooter>
        <div className="mt-2 flex flex-col items-center gap-4">


          <Button
            variant="secondary"
            className="mt-2 inline-block w-full rounded-lg bg-neutral-800 px-5 py-3 text-center text-sm font-semibold text-gray-100 sm:mt-0 sm:w-auto"
            onClick={handleAgree}
            
          >
            I understand and agree to the terms.
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
