"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import {
  Form,
  FormError,
  FormInput,
  FormLabel,
  FormSubmit,
} from "@/components/forms";
import { SignUpInput, SingUpSchema } from "../schemas/authSchema";
import { singUpAction } from "../actions/auth-actions";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(SingUpSchema), mode: "onBlur" });

  const onSubmit = async (data: SignUpInput) => {
    const { error, success } = await singUpAction(data);

    if (error) {
      toast.error(error);
    }

    if (success) {
      toast.success(success);
      reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="name">Nombre</FormLabel>
      <FormInput
        id="name"
        type="text"
        placeholder="Ingresa Tu Nombre"
        {...register("name")}
      />

      {errors.name && <FormError>{errors.name.message}</FormError>}

      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput
        id="email"
        type="email"
        placeholder="Ingresa Tu E-mail"
        {...register("email")}
      />

      {errors.email && <FormError>{errors.email.message}</FormError>}

      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput
        id="password"
        type="password"
        placeholder="Ingresa Tu Contraseña - Min. 8 Caracteres"
        {...register("password")}
      />

      {errors.password && <FormError>{errors.password.message}</FormError>}

      <FormLabel htmlFor="password_confirmation">Repetir Contraseña</FormLabel>
      <FormInput
        id="password_confirmation"
        type="password"
        placeholder="Repite Tu Contraseña"
        {...register("passwordConfirmation")}
      />

      {errors.passwordConfirmation && (
        <FormError>{errors.passwordConfirmation.message}</FormError>
      )}

      <FormSubmit value="Registrarme" />
    </Form>
  );
}
