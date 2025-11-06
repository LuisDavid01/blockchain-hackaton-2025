import "server-only";

import { and, eq, isNull } from "drizzle-orm";
import { db } from ".";


export const QUERIES = {
	getTransactions: async () => {

	},
	getTransaction: async(id: string) => {
		console.log(id);
	}
	
}
