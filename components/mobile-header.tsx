import Link from 'next/link'
import Image from 'next/image'

export function MobileHeader() {
    return (
      // <Card className="max-w-lg flex items-center justify-between mx-auto px-4 py-3.5">
      // </Card>
      <div className="w-full space-x-2 lg:hidden lg:none">
        <header className="bg-orange-500">
        <nav className="flex items-center justify-between w-full bg-neutral-900 text-white p-4">
        <Link href="/"><Image src="/perps-forge-logo.png" alt="Forge Perps" width={180} height={24} className="object-contain" /></Link>
        <Link className="w-auto text-center py-2 px-3 ml-2 font-mono uppercase bg-orange-500 text-gray-100 text-sm font-semibold tracking-wider border border-neutral-800 rounded flex items-between hover:border-transparent hover:bg-red-600" href="https://perps.forge.trade" target="_blank">Trade
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 inline-flex ml-2">
            <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
            </svg>

        
        </Link>
        </nav>
        </header>
      </div>
    );
  }

