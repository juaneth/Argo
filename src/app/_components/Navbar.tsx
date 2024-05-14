import Image from "next/image";

import Link from "next/link";

import { Button } from "~/components/ui/button";

import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <>
      <nav className="bordered-b flex w-full flex-row items-center justify-between bg-neutral-950 p-5 shadow-xl shadow-black/30">
        <div className="flex w-min flex-row">
          <Link
            href={"/"}
            className="mr-5 flex flex-col items-center justify-center"
          >
            <Image
              priority
              src={"/Argo-Wordmark.svg"}
              height={32}
              width={80}
              alt="Chita Logo"
              className="min-h-8 min-w-20"
            />
          </Link>

          <Link href={"/discover"}>
            <Button variant={"link"} className="text-lg" role="button">
              Discover
            </Button>
          </Link>

          <SignedIn>
            <Link href={"/user/watchlist"}>
              <Button variant={"link"} className="text-lg" role="button">
                Your Watchlist
              </Button>
            </Link>
          </SignedIn>
        </div>

        <div className="flex w-min flex-row gap-4">
          <SignedOut>
            <Button variant={"link"} className="text-lg" role="button">
              <SignInButton />
            </Button>
          </SignedOut>
          <SignedIn>
            <Button variant={"link"} className="text-lg" role="button">
              Notifications
            </Button>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "h-10 w-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </>
  );
}
