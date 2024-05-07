import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { Badge } from "~/components/ui/badge";

import { db } from "~/server/db";

export default async function Home() {
  const projects = await db.query.projects.findMany();

  return (
    <div className="background">
      <div className="flex w-full flex-wrap justify-center p-5">
        {projects.map((project) => {
          return (
            <Card
              key={project.id}
              role="button"
              className="relative w-96 transition-all hover:bg-white/5"
            >
              <Badge className="absolute right-5 top-5 bg-green-300 hover:bg-green-300">
                {project.watchers} Watchers
              </Badge>
              <CardHeader>
                <CardTitle>{project.displayName}</CardTitle>
                <CardDescription>{project.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{project.desc}</p>{" "}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
