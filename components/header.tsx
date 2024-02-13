import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import Link from "next/link";
import React from "react"
interface HeaderProps {
    breadcrumbs: string[];
}
export function Header({ breadcrumbs = [] }: HeaderProps) {
    return (
        <header className="flex justify-between items-center mb-4 pb-4 border-b border-neutral-600">
            <div className="flex items-center gap-2">
                {breadcrumbs.map((breadcrumb, index) => (
                    <React.Fragment key={breadcrumb}>
                        <span className="text-gray-500">{breadcrumb}</span>
                        {index < breadcrumbs.length - 1 && <ArrowRightIcon className="w-4 h-4 text-gray-500" />}
                    </React.Fragment>
                ))}
            </div>
            <div className="flex items-center justify-center gap-2 z-10">
                <Link href="https://app.evmos.domains" target="_blank">
                <Button variant="secondary" className="py-1 px-4 text-xs" size="sm">
                    Domains
                </Button>         
                </Link>   
                <Link href="/swap">
                <Button variant="secondary" className="py-1 px-4 text-xs" size="sm">
                    Swap
                </Button>
                </Link>
                <Link href="https://perps.forge.trade" target="_blank">
                <Button className="inline-flex items-center px-4 py-2 bg-accent hover:bg-accent-hover text-white py-1 px-4 text-xs" size="sm">
                    Leveraged Trading 🔥
                </Button>
                </Link>
            </div>
        </header>
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
