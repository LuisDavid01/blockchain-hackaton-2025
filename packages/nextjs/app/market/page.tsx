"use client";

import { useState } from "react";
import Image from "next/image";

type Listing = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
};

export default function MarketPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [form, setForm] = useState({ title: "", description: "", price: "", image: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newListing: Listing = {
      id: Date.now(),
      ...form,
    };
    setListings([...listings, newListing]);
    setForm({ title: "", description: "", price: "", image: "" });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Marketplace</h1>
        <p className="text-lg mb-8 text-base-content/70 text-center max-w-2xl mx-auto">
          Publish and browse NexoCore market!. 
        </p>

        {/* Publish Form */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-3 bg-base-200 p-4 rounded-xl shadow-md mb-10"
        >
          <input
            type="text"
            name="title"
            placeholder="Item name"
            value={form.title}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            required
            className="textarea textarea-bordered w-full"
          />
          <input
            type="text"
            name="price"
            placeholder="Price (ETE)"
            value={form.price}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL (optional)"
            value={form.image}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn btn-primary">
            Publish Listing
          </button>
        </form>

        {/* Listings Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.length === 0 && (
            <p className="text-center text-base-content/60 col-span-full">
              No listings yet. Be the first to publish something!
            </p>
          )}

          {listings.map(item => (
            <div key={item.id} className="card bg-base-100 shadow-md">
              {item.image && (
                <figure className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </figure>
              )}
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
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
