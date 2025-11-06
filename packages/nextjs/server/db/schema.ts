import {
  bigint,
  decimal,
  index,
  int,
  singlestoreTableCreator,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/singlestore-core";

export const createTable = singlestoreTableCreator(name => `NexoCore_${name}`);

export const value_table = createTable("value", {
  id: bigint("id", { mode: "number", unsigned: true }).primaryKey().autoincrement(),
  name: text("name").notNull(),

  value_to_usd: decimal("value_to_usd").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type DB_ValueType = typeof value_table.$inferSelect;

export const services = createTable("services", {
  id: bigint("id", { mode: "number", unsigned: true }).primaryKey().autoincrement(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type DB_ServiceType = typeof services.$inferSelect;

export const wallets = createTable(
  "wallets",
  {
    id: bigint("id", { mode: "number", unsigned: true }).primaryKey().autoincrement(),
    client_id: text("client_id").notNull(),
    value_id: bigint("value_id", { mode: "number", unsigned: true }).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  t => {
    return [index("client_id_index").on(t.client_id), index("value_id_index").on(t.value_id)];
  },
);

export type DB_WalletType = typeof wallets.$inferSelect;

export const billing = createTable(
  "billing",
  {
    id: bigint("id", { mode: "number", unsigned: true }).primaryKey().autoincrement(),
    client_id: text("client_id").notNull(),
    value_id: bigint("value_id", { mode: "number", unsigned: true }).notNull(),
    service_id: bigint("service_id", { mode: "number", unsigned: true }).notNull(),
    description: text("description").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  t => {
    return [
      index("client_id_index").on(t.client_id),
      index("value_id_index").on(t.value_id),
      index("service_id_index").on(t.service_id),
    ];
  },
);

export type DB_BillingType = typeof billing.$inferSelect;

export const images = createTable("images", {
  id: bigint("id", { mode: "number", unsigned: true }).primaryKey().autoincrement(),
  name: text("name").notNull(),
  url: text("url").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type DB_ImageType = typeof images.$inferSelect;

export const images_service = createTable(
  "images_service",
  {
    id: bigint("id", { mode: "number", unsigned: true }).primaryKey().autoincrement(),
    service_id: bigint("service_id", { mode: "number", unsigned: true }).notNull(),
    image_id: bigint("image_id", { mode: "number", unsigned: true }).notNull(),
  },
  t => {
    return [index("image_id_index").on(t.image_id), index("service_id_index").on(t.service_id)];
  },
);

export type DB_ImageServiceType = typeof images_service.$inferSelect;
