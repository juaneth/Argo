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

import { db } from "~/server/db";

export default async function Home() {
  const projects = await db.query.projects.findMany();

  return (
    <div className="background">
      <div className="flex w-full flex-wrap justify-center gap-5 p-5">
        {projects.map((project) => {
          return (
            <Card
              key={project.id}
              role="button"
              className="relative w-96 transition-all hover:bg-white/5"
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
                    <Badge className=" flex flex-row gap-2 bg-green-300 hover:bg-green-300">
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
  );
}
