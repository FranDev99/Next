"use client";

import { Form, FormInput, FormLabel, FormSubmit } from "@/components/forms";

export default function RegisterForm() {
  return (
    <Form>
      <FormLabel htmlFor="name">Nombre</FormLabel>
      <FormInput id="name" type="text" placeholder="Ingresa Tu Nombre" />

      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput id="email" type="email" placeholder="Ingresa Tu E-mail" />

      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput
        id="password"
        type="password"
        placeholder="Ingresa Tu Contraseña - Min. 8 Caracteres"
      />

      <FormLabel htmlFor="password_confirmation">Repetir Contraseña</FormLabel>
      <FormInput
        id="password_confirmation"
        type="password"
        placeholder="Repite Tu Contraseña"
      />

      <FormSubmit value="Registrarme" />
    </Form>
  );
}
