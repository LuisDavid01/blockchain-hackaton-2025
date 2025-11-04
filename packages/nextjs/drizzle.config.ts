import { type Config } from "drizzle-kit";

export default {
  schema: "./server/db/schema.ts",
  dialect: "singlestore",
  tablesFilter: ["NexoCore_*"],
  dbCredentials: {
    host: process.env.SINGLESTORE_HOST ?? "localhost",
    port: parseInt(process.env.SINGLESTORE_PORT ?? "3306"),
    user: process.env.SINGLESTORE_USER ?? "root",
    password: process.env.SINGLESTORE_PASS ?? "",
    database: process.env.SINGLESTORE_DB_NAME ?? "",
    ssl: {},
  },
} satisfies Config;
