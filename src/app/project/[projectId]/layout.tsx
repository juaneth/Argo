import { FaEye } from "react-icons/fa";
import { Badge } from "~/components/ui/badge";

import { getProject } from "~/server/db/db";

import Image from "next/image";

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

  return (
    <div className="flex h-full flex-col">
      {details!.bannerUrl ? (
        <>
          <div className="relative h-80">
            <div className="bordered-b absolute top-0 flex h-full w-full flex-row items-end">
              <div className="bordered-all m-2 flex flex-col gap-1 rounded-2xl bg-black/50 p-8 shadow-xl backdrop-blur-md">
                <div className="flex flex-row items-center gap-3">
                  <h1 className="text-3xl font-bold tracking-tight">
                    {details?.displayName}
                  </h1>
                  <Badge className="flex h-min flex-row gap-2 bg-green-300 hover:bg-green-400">
                    <FaEye className="text-lg"></FaEye>
                    {details?.watchers}
                  </Badge>
                </div>

                <h2 className="max-w-[20rem] opacity-75">{details?.desc}</h2>
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
          <div className="bordered-b flex w-full flex-row flex-col gap-2 p-8">
            <div className="flex flex-row items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight">
                {details?.displayName}
              </h1>
              <Badge className="flex h-min flex-row gap-2 bg-green-300 hover:bg-green-400">
                <FaEye className="text-lg"></FaEye>
                {details?.watchers}
              </Badge>
            </div>

            <h2 className="opacity-75">{details?.desc}</h2>
          </div>
        </>
      )}

      {children}
    </div>
  );
}
