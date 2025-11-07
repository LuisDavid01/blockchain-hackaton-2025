"use server";

import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "~~/server/db";
import { services_tables } from "~~/server/db/schema";
// Schema de validación de los datos enviados
// Debe seguir lo  que se define en la tabla de base de datos
const ServiceSchema = z.object({
	name: z.string().min(3).max(20),
	description: z.string(),
	price: z.string(),
	owner: z.string().optional().nullable(),
	createdAt: z.date().optional().nullable(),
})

// Tipo de dato
export type ServiceData = z.infer<typeof ServiceSchema>

export async function getServices() {
	const user = await auth()
		if (!user.userId) {
			return {
				success: false,
				message: 'Unauthorized access',
				error: 'Unauthorized',
			}
		}

		const values = await db.select()
			.from(services_tables)

		// devolemos los datos obtenidos
		return values


}
export async function createService(data: ServiceData) {
	try {
		const user = await auth()
		if (!user.userId) {
			return {
				success: false,
				message: 'Unauthorized access',
				error: 'Unauthorized',
			}
		}
		// Validate with Zod
		// zod valida los datos que envian a la base de datos
		// los protege de sql injection

		const validationResult = ServiceSchema.safeParse(data)
		if (!validationResult.success) {
			console.log('validation failes', validationResult.error);
			return {
				success: false,
				message: 'Error de validacion',
				errors: validationResult.error.flatten().fieldErrors,
			}
		}

		// Create expediente with validated data
		const validatedData = validationResult.data
		validatedData.owner = user.userId
		validatedData.createdAt = new Date()

		//db call
		await db.insert(services_tables).values({
			name: validatedData.name,
			description: validatedData.description,
			price: validatedData.price,
			owner: validatedData.owner,
			createdAt: validatedData.createdAt,
		})

		// retornamos un mensaje de exito
		console.log("lo logramos")
		return {
			success: true,
			message: 'Exito al subir el valor de criptomoneda',
		}

	} catch (error) {
		console.log("ha ocurrido un error ", error)
		return {
			success: false,
			message: 'Error inesperado',
			error: 'Internal server error',
		}
	}

}

export async function updateService(idService: number, data: Partial<ServiceData>) {
	return {
		success: false,
		message: 'Unauthorized access',
		error: 'Unauthorized',
	}

}
