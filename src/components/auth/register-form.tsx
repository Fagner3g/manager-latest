"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import AuthCard from "./auth-card";
import AuthFormMessage from "./auth-form-message";

import { register } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon } from "lucide-react";
import type { z } from "zod";

export default function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    startTransition(async () => {
      try {
        const { success, error } = await register(values);
        if (error) setError(error);
        setSuccess(success || "");
        form.reset();
      } catch {
        setSuccess("");
        setError("Algo deu errado.");
        form.reset();
      }
    });
  };

  return (
    <AuthCard title="Registre-se" description="Seja bem-vindo">
      <div className="space-y-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="name"
                        placeholder="Jose da Silva"
                        required
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormDescription className="hidden">Seu nome.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="voce@provedor.com.br" required {...field} disabled={isPending} />
                    </FormControl>
                    <FormDescription className="hidden">Seu e-mail.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" required {...field} disabled={isPending} />
                    </FormControl>
                    <FormDescription className="hidden">Seu e-mail.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {error && <AuthFormMessage type="error" message={error} title="Erro" />}
              {success && <AuthFormMessage type="success" message={success} title="Sucesso" />}
              <Button variant={"default"} className="w-full" disabled={isPending}>
                <LoaderIcon className={!isPending ? "hidden" : "mr-2 animate-spin"} />
                <span>Registrar</span>
              </Button>
            </div>
          </form>
        </Form>

        <div className="mt-4 text-center text-sm">
          Já tem uma conta?{" "}
          <Link href="/auth/login" className="underline">
            Efetue Login
          </Link>
        </div>
      </div>
    </AuthCard>
  );
}
