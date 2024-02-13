"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'

export function RefreshButton() {
    const router = useRouter()

  return (
    <Button
    type="submit"
    variant="secondary"
    size="icon"
    value="/markets/overview"
    className="mr-2"
    onClick={(e) => {
      router.refresh();
      const svgElement = e.currentTarget.querySelector('svg');
      if (svgElement) {
        svgElement.classList.add('spin');
        setTimeout(() => {
          svgElement.classList.remove('spin');
        }, 3000);
      }
      
    }}
  >
    <RefreshIcon />
  </Button>
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