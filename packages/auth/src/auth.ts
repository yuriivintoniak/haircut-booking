import { betterAuth } from "better-auth";
import { prisma } from "@repo/db";
import { prismaAdapter } from "better-auth/adapters/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  baseURL: {
    allowedHosts: [
      "localhost:3001",
      "*.vercel.app",
    ],
    protocol:
      process.env.NODE_ENV === "development"
        ? "http"
        : "https",
  },
  secret: process.env.BETTER_AUTH_SECRET,
});
