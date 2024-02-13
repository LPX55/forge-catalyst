import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div key="1" className="px-4 pt-4 w-80 text-white h-screen">
      <div className="flex items-center mb-8">
              <Avatar>
              <AvatarImage src="/bitmex.jpg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="ml-3">
          <div className="font-semibold font-mono tracking-wider">TROLLBOX</div>
          <div className="text-gray-400 text-xs">IN HONOR OF ARTHUR HAYES</div>
        </div>
      </div>
      <div className="space-y-3">
        <Skeleton className="w-1/2 bg-[#4d4d4d] rounded-lg p-3" />
        <Skeleton className="w-2/5 bg-[#666666] rounded-lg p-3 self-end" />
        <Skeleton className="w-3/5 bg-[#4d4d4d] rounded-lg p-3" />
        <Skeleton className="w-3/5 bg-[#666666] rounded-lg p-3 pt-8 self-end float-right" />
        {/* <Skeleton className="w-1/2 bg-[#4d4d4d] rounded-lg p-3 pt-8 mt-8" /> */}
      </div>
      <div className="absolute bottom-0 flex flex-row items-end justify-end mb-6">
        <Input className="flex-grow bg-neutral-800 rounded-sm py-2 px-4 text-black" placeholder="Type your message..." />
        <Button className="ml-2 bg-secondary border-none text-white">
          <SendIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}

function SendIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}
