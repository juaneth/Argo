"use client";

import { Button } from "~/components/ui/button";

import { deleteUser } from "~/server/auth/auth";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  {
    /*
    Passing data between a parent layout and its children is not possible. 
    However, you can fetch the same data in a route more than once, and React
    will automatically dedupe the requests without affecting performance.
    */
  }
  return (
    <div className="flex h-full flex-col">
      <div className="bordered-b flex w-full flex-row justify-between p-6">
        <div className="flex flex-col gap-0">
          <h1 className="text-xl font-semibold tracking-tight">
            Welcome to Argo!
          </h1>
          <p className="text-lg opacity-80">
            {" "}
            We just need a few details and you{"'"}ll be all set up
          </p>
        </div>
        <Button
          onClick={async () => {
            await deleteUser();
          }}
          className="bg-red-500 text-white hover:bg-red-600"
        >
          Cancel signup
        </Button>
      </div>
      {children}
    </div>
  );
}
