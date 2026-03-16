import z, { email } from 'zod'

export const BaseAuthSchema = z.object({
    name: z.string().min(1, { error: 'El nombre es obligatorio' }),
    email: z.email({ error: 'E-mail no valido' }),
    password: z.string().min(8, { error: 'La contraseña debe ser mínimo de 8 caracteres' }),
    passwordConfirmation: z.string().min(1, { error: 'La contraseña de confirmación no puede ir vacía' })
})

export const SingUpSchema = BaseAuthSchema.pick({
    name: true,
    email: true,
    password: true,
    passwordConfirmation: true
})