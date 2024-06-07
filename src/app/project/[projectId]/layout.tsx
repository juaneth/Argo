import { FaEye } from "react-icons/fa";
import { Badge } from "~/components/ui/badge";

import { getProject } from "~/server/db/db";

import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "~/components/ui/menubar";

import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    projectId: string;
  };
}) {
  {
    /*
    Passing data between a parent layout and its children is not possible. 
    However, you can fetch the same data in a route more than once, and React
    will automatically dedupe the requests without affecting performance.
    */
  }

  const details = await getProject(params.projectId);

  if (details == undefined) {
    return notFound();
  }

  return (
    <div className="flex h-full flex-col">
      <div className="bordered-b">
        <Menubar className="rounded-none border-none backdrop-blur-md">
          <MenubarMenu>
            <MenubarTrigger>Project</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Add project to watchlist</MenubarItem>
              <MenubarItem>
                New vote <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Copy link</MenubarItem>
                  <MenubarItem>Share as image</MenubarItem>
                  <MenubarItem>Copy GitHub link</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem>Show banner image</MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarCheckboxItem>Hide Navbar</MenubarCheckboxItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      {details.bannerUrl ? (
        <>
          <div className="bordered-b relative min-h-80">
            <div className="absolute top-0 flex h-full flex-col items-start gap-2 p-2">
              <div className="bordered-all flex h-full max-w-[18rem] grow flex-col gap-2 rounded-lg bg-black/50 p-6 backdrop-blur-md">
                <div className="flex flex-row justify-between gap-3">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                      {details?.displayName}
                    </h1>

                    <h2 className="text-sm">
                      <Link href={`/profile/${details?.owner}`}>
                        <Button
                          variant={"link"}
                          role="button"
                          className="m-0 h-min p-0"
                        >
                          {details?.owner}
                        </Button>
                      </Link>
                      /{details?.name}
                    </h2>
                  </div>

                  <Badge className="flex h-min flex-row gap-2 bg-green-300 hover:bg-green-400">
                    <FaEye className="text-lg"></FaEye>
                    {details?.watchers}
                  </Badge>
                </div>

                <Separator className="my-1.5"></Separator>

                <h2 className="opacity-75">{details?.desc}</h2>
              </div>
            </div>
            <img
              src={details?.bannerUrl}
              alt="Banner Image"
              className="absolute top-0 -z-50 h-full w-full object-cover"
            ></img>
          </div>
        </>
      ) : (
        <>
          <div className="bordered-b flex w-full flex-col gap-2 p-6">
            <div className="flex flex-row justify-between gap-3">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  {details?.displayName}
                </h1>

                <h2 className="text-sm">
                  <Link href={`/profile/${details?.owner}`}>
                    <Button
                      variant={"link"}
                      role="button"
                      className="m-0 h-min p-0"
                    >
                      {details?.owner}
                    </Button>
                  </Link>
                  /{details?.name}
                </h2>
              </div>

              <Badge className="flex h-min flex-row gap-2 bg-green-300 hover:bg-green-400">
                <FaEye className="text-lg"></FaEye>
                {details?.watchers}
              </Badge>
            </div>

            <Separator className="my-1.5"></Separator>

            <h2 className="opacity-75">{details?.desc}</h2>
          </div>
        </>
      )}

      {children}
    </div>
  );
}
