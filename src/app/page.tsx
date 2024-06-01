import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { FaEye } from "react-icons/fa";
import { Badge } from "~/components/ui/badge";

import { getProjects } from "~/server/db/db";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="background h-full">
      <div className="flex flex-col gap-5 p-10">
        <div className="w-fit">
          <h1 className="text-3xl">Featured Projects</h1>
        </div>
        <div className="flex h-full w-full max-w-[96rem] flex-wrap gap-5">
          {projects.map((project) => {
            return (
              <Card
                key={project.id}
                role="button"
                className="relative h-40 w-96 flex-1 transition-all hover:bg-white/5"
              >
                <CardHeader>
                  <div className="flex flex-row justify-between">
                    <div className="truncate">
                      <CardTitle className="overflow-hidden text-ellipsis">
                        {project.displayName}
                      </CardTitle>
                      <CardDescription>{project.name}</CardDescription>
                    </div>
                    <div>
                      <Badge className="1flex flex-row gap-2 bg-green-300 hover:bg-green-300">
                        <FaEye className="text-lg"></FaEye>
                        {project.watchers}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-2 max-w-lg break-words">
                    {project.desc}
                  </p>{" "}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
