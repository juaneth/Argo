"use server";

import { db } from "~/server/db";

export async function getProjects() {
  const projects = await db.query.projects.findMany();

  return projects;
}
