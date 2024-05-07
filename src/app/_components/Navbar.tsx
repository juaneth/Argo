import Image from "next/image";

import { Button } from "~/components/ui/button";

import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <>
      <nav className="bordered-b flex w-full flex-row items-center justify-between bg-neutral-900 p-5 shadow-xl shadow-black/30">
        <div className="flex w-min flex-row">
          <Image
            priority
            src={"/icon-word.svg"}
            width={24}
            height={32}
            alt="Chita Logo"
            className="mr-5 max-h-8 w-min"
          />

          <Button variant={"link"} className="text-lg" role="button">
            Discover
          </Button>
          <Button variant={"link"} className="text-lg" role="button">
            Your Watchlist
          </Button>
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
