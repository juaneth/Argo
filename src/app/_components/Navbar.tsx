import Image from "next/image";

import { Button } from "~/components/ui/button";

export default function Navbar() {
  return (
    <>
      <nav className="bordered-b flex w-full flex-row items-center justify-between bg-neutral-900 p-5 shadow-xl shadow-black/30">
        <Image
          priority
          src={"/icon-word.svg"}
          width={24}
          height={32}
          alt="Chita Logo"
          className="max-h-8 w-min"
        />

        <div className="flex w-min flex-row">
          <Button variant={"link"} className="text-lg" role="button">
            Discover
          </Button>
          <Button variant={"link"} className="text-lg" role="button">
            Your Watchlist
          </Button>
        </div>

        <div className="flex w-min flex-row">
          <Button variant={"link"} className="text-lg" role="button">
            Notifications
          </Button>
          <Button variant={"link"} className="text-lg" role="button">
            Profile
          </Button>
        </div>
      </nav>
    </>
  );
}
