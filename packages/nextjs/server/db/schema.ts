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

export const services_tables = createTable("services", {
	id: bigint("id", { mode: "number", unsigned: true }).primaryKey().autoincrement(),
	name: text("name").notNull(),
	description: text("description").notNull(),
	price: decimal("price").notNull(),
	owner: text("owner_id").notNull(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
},
	t => {
		return [
			index("owner_id_index").on(t.owner),
		];
	},


);

export type DB_ServiceType = typeof services_tables.$inferSelect;

export const billing_table = createTable(
	"billing_table",
	{
		id: bigint("id", { mode: "number", unsigned: true }).primaryKey().autoincrement(),
		client_id: text("client_id").notNull(),
		service_id: bigint("service_id", { mode: "number", unsigned: true }).notNull(),
		value: decimal("value").notNull(),
		value_to_usd: decimal("value_to_usd").notNull(),
		seller_id: text("seller_id").notNull(),
		description: text("description").notNull(),
		createdAt: timestamp("created_at").notNull().defaultNow(),
	},
	t => {
		return [
			index("client_id_index").on(t.client_id),
			index("service_id_index").on(t.service_id),
			index("seller_id_index").on(t.seller_id),

		];
	},
);

export type DB_BillingType = typeof billing_table.$inferSelect;

export const images_table = createTable("images_table", {
	id: bigint("id", { mode: "number", unsigned: true }).primaryKey().autoincrement(),
	name: text("name").notNull(),
	url: text("url").notNull(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type DB_ImageType = typeof images_table.$inferSelect;

export const images_service = createTable(
	"images_service",
	{
		id: bigint("id", { mode: "number", unsigned: true }).primaryKey().autoincrement(),
		service_id: bigint("service_id", { mode: "number", unsigned: true }).notNull(),
		image_id: bigint("image_id", { mode: "number", unsigned: true }).notNull(),
	},
	t => {
		return [
			index("image_id_index").on(t.image_id),
			index("service_id_index").on(t.service_id)
		];
	},
);

export type DB_ImageServiceType = typeof images_service.$inferSelect;
