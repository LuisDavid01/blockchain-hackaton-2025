import { db } from "~~/server/db";
import { value_table } from "~~/server/db/schema";
const defaultValue_table = [
	{
		name: "USDT",
		value_to_usd: '1.0',
	},
	{
		name: "ETH",
		value_to_usd: '1.2'
	},
	{
		name: "BTC",
		value_to_usd: '2.4'
	}

];
export default function SandboxPage(){
	return (
		<div className="flex flex-col gap-4">
		Seed the database
		<form action={async () => {
			"use server";
			console.log("sub nerds")
			const value_insert = await db.insert(value_table).values(
				defaultValue_table.map((value) => ({
					name: value.name,
					value_to_usd: value.value_to_usd,
				})),
			);
			
			console.log(value_insert)
		}}
		>
		<button type="submit">Load Data</button>
		</form>

		</div>
	)
}
