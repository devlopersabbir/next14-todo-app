import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});

export default {
  schema: "./src/db/**/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    uri: process.env.DATABASE_URL as string,
  },
} satisfies Config;
