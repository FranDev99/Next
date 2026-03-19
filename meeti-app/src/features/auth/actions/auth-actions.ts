'use server'

import { SignUpInput, SingUpSchema } from "../schemas/authSchema";

export async function singUpAction(input: SignUpInput) {
    const data = SingUpSchema.safeParse(input)

    if (!data.success) {
        return {
            error: 'Hubo un error',
            success: ''
        }
    }
}