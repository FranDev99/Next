"use client";

import { Form, FormLabel, FormInput, FormSubmit } from "@/components/forms";

export default function LoginForm() {
  return (
    <Form>
      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput type="email" id="email" placeholder="Ingresa Tu E-mail" />

      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput
        type="password"
        id="password"
        placeholder="Ingresa Tu Contraseña"
      />
      <FormSubmit value="Iniciar Sesión" />
    </Form>
  );
}
