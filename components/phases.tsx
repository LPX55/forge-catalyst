
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { List, ListItem } from "@tremor/react";


export default function Phases() {
  return (
        <div className="grid grid-cols-1 gap-6 mb-8  md:gap-6 md:grid-cols-1 xl:grid-cols-3">
          <Card className="flex flex-col items-center bg-neutral-800 pt-4 pb-0">
            <CardContent className="flex flex-col items-center">
              {/* <Avatar className="w-20 h-20" src="/placeholder.svg?height=100&width=100" /> */}
              <div className="flex flex-row gap-4 justify-start w-full">              
              <Badge className="flex mt-2 rounded-sm" variant="default">
                Warmup
              </Badge>
              <h3 className="text-base md:text-xl flex font-bold mt-2 flex-nowrap">Soft Launch</h3>
              </div>
              <Separator className="my-3 bg-neutral-700 opacity-50" />
              <p className="text-gray-300 mt-1">Get familiar with the platform and earn rewards for providing early liquidity</p>
              <Separator className="my-3 bg-neutral-700 opacity-50" />
              <List>
                <ListItem key="0a">
                <span className="text-gray-300 inline-flex self-center leading-6"><CalendarIcon /> Period</span>
                <span className="text-gray-100 font-semibold inline-flex self-center leading-6">Dec. 10th, 2023</span>
                <span className="text-gray-100 font-semibold inline-flex self-center leading-6">-</span>
                <span className="text-gray-100 font-semibold inline-flex self-center leading-6">Jan. 3rd, 2024</span>
                </ListItem>
                <ListItem key="0b">
                <span className="text-gray-300 inline-flex self-center leading-6"><RewardsIcon /> Rewards</span>
                <span className="text-gray-100 font-semibold inline-flex self-center leading-6">6,800 stEVMOS</span>
                <span className="text-gray-100 font-semibold inline-flex self-center leading-6">One-Time</span>
                </ListItem>
            </List>
            </CardContent>
          </Card>          
          <Card className="flex flex-col items-center bg-neutral-800 pt-4 pb-0">
          <CardContent className="flex flex-col items-center justify-between">
              <div className="flex flex-row gap-4 justify-start w-full">              
              <Badge className="flex mt-2 rounded-sm" variant="default">
                Phase 1
              </Badge>
              <h3 className="text-base md:text-xl flex font-bold mt-2 flex-nowrap">Volume Catalyst</h3>
              </div>
              <Separator className="my-3 bg-neutral-700 opacity-50" />
              <p className="text-gray-300 mt-1">Trade at least $2,500 in margin volume to earn your share of 68,000 stEVMOS</p>
              <Separator className="my-3 bg-neutral-700 opacity-50" />
              <List>
                <ListItem key="0a">
                <span className="text-gray-300 inline-flex self-center leading-6"><CalendarIcon /> Period</span>
                <span className="text-gray-100 font-semibold inline-flex self-center leading-6">Jan. 3rd, 2024</span>
                <span className="text-gray-100 font-semibold inline-flex self-center leading-6">-</span>
                <span className="text-gray-100 font-semibold inline-flex self-center leading-6">Jan 31st, 2024</span>
                </ListItem>
                <ListItem key="0b">
                <span className="text-gray-300 inline-flex self-center leading-6"><RewardsIcon /> Rewards</span>
                <span className="text-gray-100 font-semibold inline-flex self-center leading-6">68,000 stEVMOS</span>
                <span className="text-gray-100 font-semibold inline-flex self-center leading-6">One-Time</span>
                </ListItem>
            </List>
            </CardContent>
          </Card>         
          <Card className="flex flex-col w-full items-stretch bg-neutral-800 pt-4 pb-0">
            <CardContent className="flex flex-col items-center justify-between">
              <div className="flex flex-row gap-4 justify-start w-full flex-nowrap">              
              <Badge className="flex mt-2 rounded-sm" variant="default">
                Phase 3
              </Badge>
              <h3 className="text-base md:text-xl flex font-bold mt-2 flex-nowrap">Traders&apos; Competition</h3>
              </div>
              <Separator className="my-3 bg-neutral-700 opacity-50" />
              <p className="text-gray-300 mt-1 text-left place-self-start">Fight to the top 20 PNL spot to earn rewards</p>
              <Separator className="my-3 bg-neutral-700 opacity-50" />
              <List>
                <ListItem key="0a" className="justify-start gap-6">
                <span className="w-24 text-gray-300 inline-flex self-center leading-6"><CalendarIcon /> Period</span>
                <span className="text-gray-100 font-semibold inline-flex justify-start self-center leading-6">Feb. 1st, 2024</span>
                <span className="text-gray-100 font-semibold inline-flex self-center leading-6">-</span>
                <span className="text-gray-100 font-semibold inline-flex self-center leading-6">April 31st, 2024</span>
                </ListItem>
                <ListItem key="0b" className="justify-start gap-6">
                <span className="w-24 text-gray-300 inline-flex self-center leading-6"><RewardsIcon /> Rewards</span>
                <span className="text-gray-100 font-semibold inline-flex self-center justify-start leading-6">87,385 stEVMOS</span>
                <span className="text-gray-100 font-semibold inline-flex self-center leading-6">/</span>
                <span className="text-gray-100 font-semibold inline-flex self-center leading-6">Monthly</span>
                </ListItem>
            </List>
            </CardContent>
          </Card>           
        </div>
  )
}



function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
      </svg>
      
    )
  }
  

function RewardsIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
        </svg>
    )
  }
  
function StatusIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
      
    )
  }
  