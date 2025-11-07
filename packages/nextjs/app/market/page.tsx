"use client";

import { useState } from "react";
import Image from "next/image";
import ServicesForm from "~~/components/ServicesForm";
import { useQuery } from "@tanstack/react-query";
import { getServices } from "~~/actions/services";
import { DB_ServiceType } from "~~/server/db/schema";


export default function MarketPage() {

	const {data,  isLoading  } = useQuery({
		queryKey: ['services'],
		queryFn: async () => {
			// llamamos a la base de datos por los datos  :v
			const res = await getServices();
			return res ;
		},
		staleTime: 60 * 1000,
	})

	const listings = data as DB_ServiceType[] || [];

	return (
		<div className="container mx-auto p-4">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl font-bold mb-8 text-center">Marketplace</h1>
				<p className="text-lg mb-8 text-base-content/70 text-center max-w-2xl mx-auto">
					Publish and browse NexoCore market!.
				</p>

				<ServicesForm />

				
				{/* Listings Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{listings.length === 0 || isLoading && (
						<p className="text-center text-muted-foreground/60 col-span-full">
							No listings yet. Be the first to publish something!
						</p>
					)}

					{listings.map((item: DB_ServiceType) => (
						<div key={item.id} className=" bg-card border-grey-200 shadow-md">
							{(
								<figure className="relative h-48">
								imagen
								</figure>
							)}
							<div className="card-body">
								<h2 className="card-title">{item.name}</h2>
								<p>{item.description}</p>
								<div className="flex justify-between items-center mt-3">
									<span className="font-bold">{item.price} ETE</span>
									<button className="btn btn-secondary btn-sm">Add to cart</button>
								</div>
							</div>
						</div>

						 
					))}
				</div>
			</div>
		</div>
	);
}
