"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

import { Button } from "~/components/ui/button";

export default function Page() {
  return (
    <div className="background flex h-screen flex-col items-center justify-center">
      <Card className="w-[30rem]">
        <CardHeader>
          <CardTitle>Complete your sign-up</CardTitle>
          <CardDescription>Wont take long, promise.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="@bestusername" />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="username">Display name</Label>
            <Input id="username" placeholder="BestDisplayName" />
          </div>
        </CardContent>
        <CardFooter className="justify-end gap-3">
          <Button onClick={() => {
            
          }} className="bg-green-600 text-white shadow-2xl shadow-green-500/20 hover:bg-green-700">
            Create account
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
