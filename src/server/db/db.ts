"use server";

import { db } from "~/server/db";

export async function getProjects() {
  const projects = await db.query.projects.findMany();

  return projects;
}

export async function getProject(name: string) {
  const projects = await db.query.projects.findFirst({
    where: (project, { eq }) => eq(project.name, `${name}`),
  });

  function fnum(x: number) {
    if (isNaN(x)) return x;

    if (x < 9999) {
      return x;
    }

    if (x < 1000000) {
      return Math.round(x / 1000) + "K";
    }
    if (x < 10000000) {
      return (x / 1000000).toFixed(2) + "M";
    }

    if (x < 1000000000) {
      return Math.round(x / 1000000) + "M";
    }

    if (x < 1000000000000) {
      return Math.round(x / 1000000000) + "B";
    }

    return "1T+";
  }

  return projects;
}
