import { AlertTitle, AlertDescription, Alert } from "@/components/ui/alert"

export default function ConstructionAlert() {
  return (
      <Alert className="hidden lg:flex max-w-md text-neutral-900 bg-yellow-400 rounded-md items-center space-x-12 scale-75 origin-top-right">
        <ConstructionIcon className="w-10 h-10 mt-1 ml-4 stroke-neutral-900" />
        <div className="ml-6 py-1 mt-2">
          <AlertTitle className="font-semibold animate-pulse">Construction Ahead</AlertTitle>
          <AlertDescription className="text-xs">
            Put on your hart hats, things might get bumpy.
          </AlertDescription>
        </div>
      </Alert>
  )
}

function ConstructionIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect x="2" y="6" width="20" height="8" rx="1" />
      <path d="M17 14v7" />
      <path d="M7 14v7" />
      <path d="M17 3v3" />
      <path d="M7 3v3" />
      <path d="M10 14 2.3 6.3" />
      <path d="m14 6 7.7 7.7" />
      <path d="m8 6 8 8" />
    </svg>
  )
}