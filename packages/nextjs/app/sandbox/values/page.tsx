"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllValues } from "~~/actions/value";
import { DB_ValueType } from "~~/server/db/schema";

export default function ValuesSandBoxPage() {
	const { data, isLoading } = useQuery({
		queryKey: ['values'],
		queryFn: async () => {
			const data = await getAllValues();
			console.log(data)
			return data ?? [];
		},
		staleTime: 30 * 1000,
	})

	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<div className="flex flex-col gap-4">
			look up the db
			{
				data?.map((value: DB_ValueType) => {
					return (
						<div className="flex flex-center items-center justify-center" key={value.id}>
							<p className="text-lg font-bold text-green-600">{value.name}</p>
							<p className="text-sm font-bold text-green-800">valor en USD: {value.value_to_usd}</p>
						</div>
					)
				})
			}
		</div>
	)
}
