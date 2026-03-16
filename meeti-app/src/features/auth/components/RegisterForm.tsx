"use client";

import { useForm } from "react-hook-form";
import { Form, FormInput, FormLabel, FormSubmit } from "@/components/forms";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="name">Nombre</FormLabel>
      <FormInput
        id="name"
        type="text"
        placeholder="Ingresa Tu Nombre"
        {...register("name")}
      />

      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput
        id="email"
        type="email"
        placeholder="Ingresa Tu E-mail"
        {...register("email")}
      />

      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput
        id="password"
        type="password"
        placeholder="Ingresa Tu Contraseña - Min. 8 Caracteres"
        {...register("password")}
      />

      <FormLabel htmlFor="password_confirmation">Repetir Contraseña</FormLabel>
      <FormInput
        id="password_confirmation"
        type="password"
        placeholder="Repite Tu Contraseña"
        {...register("passwordConfirmation")}
      />

      <FormSubmit value="Registrarme" />
    </Form>
  );
}
