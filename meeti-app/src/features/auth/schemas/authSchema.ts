import z, { email, refine } from 'zod'

export const BaseAuthSchema = z.object({
    name: z.string().trim().min(1, { error: 'El nombre es obligatorio' }),
    email: z.email({ error: 'E-mail no valido' }),
    password: z.string().trim().min(8, { error: 'La contraseña debe ser mínimo de 8 caracteres' }),
    passwordConfirmation: z.string().trim().min(1, { error: 'La contraseña de confirmación no puede ir vacía' })
})

export const SingUpSchema = BaseAuthSchema.pick({
    name: true,
    email: true,
    password: true,
    passwordConfirmation: true
}).refine((data) => data.password === data.passwordConfirmation, { error: "Las contraseñas no son iguales", path: ['passwordConfirmation'] })

export type SignUpInput = z.infer<typeof SingUpSchema>