'use client'
import { useActionState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

import { Form, FormError, FormGroup, FormInput, FormLabel, FormSelect, FormTextarea } from '../FormWithActios'
import { DB_ServiceType } from '~~/server/db/schema'
import { createService, updateService } from '~~/actions/services'
interface ExpedienteFormProps {
  service ?: DB_ServiceType,
  isEditing?: boolean
}

const initialState: ActionResponse = {
  success: false,
  message: '',
  errors: undefined,
}



export default function ServicesForm ({service,
  isEditing = false,
}: ExpedienteFormProps) {

    const router = useRouter()

  const [state, formAction, isPending] = useActionState<
    ActionResponse,
    FormData
  >(async (prevState: ActionResponse, formData: FormData) => {
    // Extract data from Form
    const data = {
		name: formData.get('name') as string,
		description: formData.get('description') as string,
		price: formData.get('price')  as string,
    }

    try {
      // Call the appropriate action based on whether we're editing or creating
      const result = isEditing
        ? await updateService(Number(service!.id), data)
        : await createService(data)


      // Handle successful submission
      if (result.success) {
        router.refresh()

      }

      return result
    } catch (err) {
      return {
        success: false,
        message: (err as Error).message || 'An error occurred',
        errors: undefined,
      }
    }
  }, initialState)


    return (
    <Form action={formAction}>
      {state?.message && (
        <FormError
          className={`mb-4 ${
            state.success ? 'bg-green-100 text-green-800 border-green-300' : ''
          }`}
        >
          {state.message}
        </FormError>
      )}

      <FormGroup>
        <FormLabel htmlFor="name">Nombre del  servicio</FormLabel>
        <FormInput
          id="name"
          name="name"
          placeholder="Nombre  del servicio"
          defaultValue={service?.name || ''}
          required
          minLength={3}
          maxLength={100}
          disabled={isPending}
          aria-describedby="title-error"
          className={state?.errors?.name ? 'border-red-500' : ''}
        />
        {state?.errors?.name && (
          <p id="title-error" className="text-sm text-red-500">
            {state.errors.name[0]}
          </p>
        )}
      </FormGroup>

      

      <FormGroup>
        <FormLabel htmlFor="description">Descripcion</FormLabel>
        <FormTextarea
          id="description"
          name="description"
		  defaultValue={service?.description || ''}
          aria-describedby="description-error"
          className={state?.errors?.description ? 'border-red-500' : ''}
        />
        {state?.errors?.description && (
          <p id="description-error" className="text-sm text-red-500">
            {state.errors.description[0]}
          </p>
        )}
      </FormGroup>

	       <FormGroup>
        <FormLabel htmlFor="price">Precio del servicio</FormLabel>
        <FormInput
          id="price"
          name="price"
          placeholder="Precio del servicio"
          defaultValue={service?.price || '231'}
          required
          minLength={3}
          maxLength={100}
          disabled={isPending}
          aria-describedby="title-error"
          className={state?.errors?.name ? 'border-red-500' : ''}
        />
        {state?.errors?.price && (
          <p id="price-error" className="text-sm text-red-500">
            {state.errors.price[0]}
          </p>
        )}
      </FormGroup>

     
      <div className="flex justify-end gap-2 mt-6">
        <Button
          type="button"
          variant="ghost"
          onClick={() => router.back()}
          disabled={isPending}
        >
          Cancel
        </Button>
        <Button type="submit" >
            Confirmar cambios
        </Button>
      </div>
    </Form>
  )
}
