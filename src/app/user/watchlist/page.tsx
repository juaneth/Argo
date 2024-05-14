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
      <div className="flex w-full flex-wrap justify-center gap-5 p-5">
        <div className="flex w-full flex-col items-start gap-2 p-5">
          <h1 className="text-4xl font-bold">Your watchlist</h1>

          <h2>Projects you have chose you wanted to keep up with</h2>
        </div>
      </div>
    </div>
  );
}
