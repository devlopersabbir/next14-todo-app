import { int, mysqlSchema } from "drizzle-orm/mysql-core";

export const mySchema = mysqlSchema("my_shema");

export const userShema = mySchema.table("User", {});
