'use server'

import { SignUpInput, SingUpSchema } from "../schemas/authSchema";
import { authService } from "../services/AuthService";

export async function singUpAction(input: SignUpInput) {
    const data = SingUpSchema.safeParse(input)

    if (!data.success) {
        return {
            error: 'Hubo un error',
            success: ''
        }
    }

    await authService.register(data.data)
}