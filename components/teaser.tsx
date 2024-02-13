'use client'
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button, buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import React from "react"
import { Heart } from 'lucide-react';

export function Teaser() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }
  return (
    <main
      key="1"
      className="flex flex-col items-center justify-center min-h-screen px-0 pt-4"
    >

      <section className="flex flex-col w-full h-[90vh] max-w-screen px-4 sm:px-6 md:px-12 self-center justify-center justify-items-center">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-24 xl:grid-cols-[1fr_500px]">
          <img
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last"
            height="400"
            src="/ironworks.png"
            width="400"
          />
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="mb-8 text-2xl font-bold tracking-normal leading-6 sm:text-4xl xl:text-4xl">
                IronWorks:{" "}
                <span className="font-normal ">Empowering Your Trades with Precision-Crafted Tools and Insights</span>
              </h1>
              <Separator className="my-8" />
              <p className="text-gray-500 md:text-base dark:text-neutral-300">
                We're on a mission to become your trusted partner in the ever-evolving world of DeFi, beginning with perpetual futures trading.
              </p>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-gray-500 md:text-base dark:text-neutral-300">More than data and analytics</li>
              <li className="text-gray-500 md:text-base dark:text-neutral-300">Position tracking and alerts</li>
              <li className="text-gray-500 md:text-base dark:text-neutral-300">
                Automated trading and advanced strategies
              </li>
            </ul>
            {/* <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Join Us
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn More
              </Link>
            </div> */}
          </div>
        </div>
   
      </section>
      <section className="pt-20 pb-10">
      <div className="md:hidden">
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-[75vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden w-full h-full flex-col bg-neutral-900 p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-neutral-800" />
          <div className="relative z-20 flex items-center text-2xl font-medium">
          <Heart className="fill-red bg-red mr-4" />
            Because your success is our commitment.
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-6">
              <p className="text-4xl w-full leading-normal tracking-wide">
                &ldquo;As iron sharpens iron, so one <s>person</s> ape sharpens another.&rdquo;
              </p>
              <p className="text-xl mt-6">- Book of Proverbs <span className="text-xs italic text-muted-foreground">(probably)</span></p>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Stay in the loop.
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below for a friendly notification when the service launches.
              </p>
            </div>
            <div className={cn("grid gap-4")}>
              <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      // disabled={isLoading}
                      disabled
                    />
                  </div>
                  {/* <Button disabled={isLoading}> */}
                  <Button disabled>
                    {isLoading && (
                      <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Keep Me Updated
                  </Button>
                </div>
                <p className="mt-4 px-1 py-2 text-center text-sm text-muted-foreground">
              By clicking the button above you agree to receive occasional updates related to the Forge ecosystem.
            </p>
              </form>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="px-2 text-muted-foreground">
                    More Ways to Connect
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="secondary" className="mb-0" asChild>
                  <Link href="https://x.com/ForgeDEX" target="_blank">
                    <TwitterIcon className="mr-2 h-4 w-4 text-white fill-white" />
                  @ForgeDEX
                  </Link>
                </Button>              
                <Button variant="secondary" className="mt-0" asChild>
                  <Link href="https://x.com/EvmosDAO" target="_blank">
                    <TwitterIcon className="mr-2 h-4 w-4 text-white fill-white" />
                  @EvmosDAO                  
                  </Link>

                </Button>                
                <Button variant="secondary" className="mt-0" asChild>
                  <Link href="https://t.me/ForgeDEX" target="_blank">

                    <TelegramIcon className="mr-2 h-4 w-4 text-white fill-white" />
                  @ForgeDEX
                                    </Link>

                </Button>
              </div>
            </div>            
          </div>
        </div>
      </div>
      </section>

      {/* <section className="mt-8 grid grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <Badge>Feature 1</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-neutral-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </CardContent>
          </Card>
          <div>
            <img
              alt="Teaser graphic for Feature 1"
              className="w-full h-full object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
          </div>
        </section>
        <section className="mt-8 grid grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <Badge>Feature 2</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-neutral-300">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </CardContent>
          </Card>
          <div>
            <img
              alt="Teaser graphic for Feature 2"
              className="w-full h-full object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
          </div>
        </section>
        <section className="mt-8 grid grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <Badge>Feature 3</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-neutral-300">Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </CardContent>
          </Card>
          <div>
            <img
              alt="Teaser graphic for Feature 3"
              className="w-full h-full object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
          </div>
        </section> */}
    </main>
  )
}

function SpinnerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>

  )
}
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
    {...props}
    height="23"
    viewBox="0 0 1200 1227"
    width="23"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
  </svg>

  )
}

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><defs><linearGradient id="logosTelegram0" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2AABEE"/><stop offset="100%" stop-color="#229ED9"/></linearGradient></defs><path fill="url(#logosTelegram0)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0"/><path fill="#FFF" d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072"/></svg>

  )
}