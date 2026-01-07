import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prismadb =
  global.prisma ||
  new PrismaClient({
    log: ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prismadb;
}
