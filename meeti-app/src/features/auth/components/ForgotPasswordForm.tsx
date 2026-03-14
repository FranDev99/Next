"use client";

import { Form, FormInput, FormLabel, FormSubmit } from "@/components/forms";

export default function ForgotPasswordForm() {
  return (
    <Form>
      <FormLabel>E-mail</FormLabel>
      <FormInput type="email" id="email" placeholder="Ingresa Tu E-mail" />
      <FormSubmit value="Enviar Instrucciones" />
    </Form>
  );
}
