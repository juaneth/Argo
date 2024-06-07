"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";

export async function deleteUser() {
  const user = auth();

  await clerkClient.users
    .getUser(user.userId!)
    .then(async (userInfo) => {
      if (userInfo) {
        await clerkClient.users.deleteUser(user.userId!);
      }
    })
    .catch((error) => {
      console.error("Account doesnt exist to delete.", error);

      auth().redirectToSignIn();
    });

  redirect("/");
}

export async function initializeUser() {
  const user = auth();

  await clerkClient.users
    .getUser(user.userId!)
    .then(async (userInfo) => {
      if (userInfo) {
        await clerkClient.users.deleteUser(user.userId!);
      }
    })
    .catch((error) => {
      console.error("Account doesnt exist to delete.", error);

      auth().redirectToSignIn();
    });

  redirect("/");
}

