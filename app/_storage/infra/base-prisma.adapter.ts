import type { PrismaClient } from "@prisma/client";

export abstract class BasePrismaAdapter {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }
}
