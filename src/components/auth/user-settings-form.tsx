"use client";

import type { User } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Switch } from "../ui/switch";
import AuthFormMessage from "./auth-form-message";

import { changeSettings } from "@/actions/auth/settings";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UserSettingsSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, ShieldAlert } from "lucide-react";
import type { z } from "zod";

interface Props {
  user?: User;
}
export default function UserSettingsForm({ user }: Props) {
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const form = useForm<z.infer<typeof UserSettingsSchema>>({
    resolver: zodResolver(UserSettingsSchema),
    defaultValues: {
      name: user?.name || undefined,
      email: user?.email || undefined,
      password: undefined,
      newPassword: undefined,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      isTwoFactorAuthEnabled: !!user?.isTwoFactorEnabled,
    },
  });

  const onSubmit = async (values: z.infer<typeof UserSettingsSchema>) => {
    startTransition(async () => {
      try {
        const resp = await changeSettings(values);
        const { success, error } = resp;
        if (!resp) {
          setError("Resposta inválida do servidor");
          setSuccess("");
          form.reset();
          return;
        }

        if (error) {
          setError(error);
          setSuccess("");
          return;
        }
        if (success) {
          setSuccess(success);
          setError("");
          update();
        }
      } catch {
        setSuccess("");
        setError("Algo deu errado.");
        form.reset();
      }
    });
  };

  return (
    <div className="">
      <Card x-chunk="dashboard-04-chunk-1">
        <CardHeader>
          <CardTitle>Dados do Usuário</CardTitle>
          <CardDescription>Suas informações</CardDescription>
        </CardHeader>
        <CardContent>
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
                          <Input type="email" placeholder="voce@provedor.com.br" {...field} disabled />
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
                          <Input type="password" placeholder="******" {...field} disabled={isPending} />
                        </FormControl>
                        <FormDescription className="hidden">Seu e-mail.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nova senha</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="******" {...field} disabled={isPending} />
                        </FormControl>
                        <FormDescription className="hidden">Seu e-mail.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="isTwoFactorAuthEnabled"
                    render={({ field }) => (
                      <FormItem className="m-2 flex flex-row items-center justify-between space-x-2 rounded-lg border p-4">
                        <ShieldAlert className="text-yellow-400" />
                        <FormLabel className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">Autenticação de 2 Fatores</p>
                          <p className="text-sm text-muted-foreground">Deixe sua conta mais segura</p>
                        </FormLabel>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {error && <AuthFormMessage type="error" message={error} title="Erro" />}
                  {success && <AuthFormMessage type="success" message={success} title="Sucesso" />}
                  <Separator />
                  <div className="flex w-full items-center justify-end">
                    <Button variant={"default"} disabled={isPending}>
                      <LoaderIcon className={!isPending ? "hidden" : "mr-2 animate-spin"} />
                      <span>Salvar</span>
                    </Button>
                  </div>
                </div>
              </form>
            </Form>

            <div className="mt-4 text-center text-sm">
              <Link href="/" className="underline">
                Página Inicial
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
