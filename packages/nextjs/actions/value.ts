"use server";

import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "~~/server/db";
import { value_table } from "~~/server/db/schema";
// Schema de validación de los datos enviados
// Debe seguir lo  que se define en la tabla de base de datos
const ValueSchema = z.object({
	name: z.string(),
	value_to_usd: z.string(),
})

// Tipo de dato
export type ValueData = z.infer<typeof ValueSchema>


export async function getAllValues() {

	try {
		// Valida el usuario y autentica el usuario
		const user = await auth();
		if (!user.userId) {
			throw new Error('Unauthorized access')
		}

		// llamada a la base de datos
		const values = await db.select()
			.from(value_table)

		// devolemos los datos obtenidos
		return values

	} catch (error) {
		console.log(error);
		return [];
	}

}

export async function createValue(data: ValueData) {
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

		const validationResult = ValueSchema.safeParse(data)
		if (!validationResult.success) {
			console.log('validation failes', validationResult.error);
			return {
				success: false,
				message: 'Error validando  el valor de las criptomonedas',
				error: validationResult.error.flatten().formErrors,
			}
		}

		// Create expediente with validated data
		const validatedData = validationResult.data


		//db call
		await db.insert(value_table)
			.values(validatedData)

			// retornamos un mensaje de exito
		return {
			success: true,
			message: 'Exito al subir el valor de criptomoneda',
		}
	} catch (error) {

		// retornamos un mensaje de error
		return {
			success: false,
			message: 'Error interno del servidor',
			error: 'Error subiendo el valor de criptomoneda',
		}
	}
}

export async function updateValue(
	idValue: number,
	data: Partial<ValueData>) {
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
		const validationResult = ValueSchema.safeParse(data)
		if (!validationResult.success) {
			console.log('validation failes', validationResult.error);
			return {
				success: false,
				message: 'Error validando  el valor de las criptomonedas',
				error: validationResult.error.flatten().formErrors,
			}
		}

		// Create expediente with validated data
		const validatedData = validationResult.data

		const updateData: Record<string, unknown> = {}

		// en caso de datos incompletos, no actualizamos nada
		if (validatedData.name !== undefined)
			updateData.name = validatedData.name
		if (validatedData.value_to_usd !== undefined)
			updateData.value_to_usd = validatedData.value_to_usd

		//db call
		await db.update(value_table)
			.set(updateData)
			.where(eq(value_table.id, idValue))
		return {
			success: true,
			message: 'Exito al subir el valor de criptomoneda',
		}
	} catch (error) {
		return {
			success: false,
			message: 'Error interno del servidor',
			error: 'Error subiendo el valor de criptomoneda',
		}
	}
}

export async function deleteValue(idValue: number) {
	const user = await auth();
	if (!user.userId) {
		return {
			success: false,
			message: 'Unauthorized access',
			error: 'Unauthorized',
		}
	}

	//cuando haga falta validar que el item que se quiere eliminar 
	//db call
	await db.delete(value_table)
		.where(eq(value_table.id, idValue))

	return {
		success: true,
		message: 'Exito al eliminar el valor de criptomoneda',
	}
}
