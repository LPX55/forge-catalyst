import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { CardContent, CardHeader, CardTitle, CardDescription, CardFooter, Card } from "@/components/ui/card"
import Disclaimer from '@/components/disclaimer'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = cookies()
  const pledged = Boolean(cookieStore.get('pledged'))

  return (
    <>
      <div className="dark bg-[#1a1a1a] text-gray-200 text-sm overflow-y-hidden h-[100vh] flex align-center items-start  content-center place md:items-center xl:text-md">
        <Disclaimer agreed={pledged}/>
      </div>
      <video autoPlay loop id="video-background" muted playsInline src="/catalyst.webm" />
      
    </>
  )
}