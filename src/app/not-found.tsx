import Link from "next/link";

import { Button } from "~/components/ui/button";

export default function NotFound() {
  return (
    <div className="background flex h-full w-full flex-col items-center justify-center gap-3">
      <h2 className="text-3xl font-bold tracking-tight">
        Woops... This is awkward
      </h2>
      <p className="text-lg">
        Unfortunately we couldn{"'"}t find what you were looking for.
      </p>
      <Button variant={"link"}>
        <Link href="/">Go back to home page</Link>
      </Button>
    </div>
  );
}
