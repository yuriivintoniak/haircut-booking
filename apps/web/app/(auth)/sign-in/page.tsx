"use client";

import { Button } from "@repo/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
} from "@repo/ui/components/field";
import { Input } from "@repo/ui/components/input";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "../../../lib/auth-client";
import { useMutation } from "@tanstack/react-query";
  
type SignInFormData = {
  email: string;
  password: string;
};

export default function SignInPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: {
      errors: formErrors,
    },
  } = useForm<SignInFormData>();

  const signInMutation = useMutation({
    mutationFn: async (data: SignInFormData) => {
      const response = await signIn.email(data);
      if (response.error) throw new Error(response.error.message);
      return response.data;
    },
    onSuccess: () => {
      router.push("/dashboard");
    },
  });

  function onSubmit(data: SignInFormData) {
    signInMutation.mutate(data);
  }

  return (
    <main className="min-h-svh w-full flex items-center justify-center">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>Sign in to your account</CardTitle>
            <CardDescription>
              Enter your email below to sign in to your account
            </CardDescription>
            {signInMutation.isError && (
              <p className="text-[#F36D97] text-sm font-medium">
                {signInMutation.error.message}
              </p>
            )}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FieldGroup>
                <Field>
                  <Input
                    {...register("email", {
                      required: "Email is required",
                    })}
                    type="email"
                    placeholder="Email"
                  />
                  {formErrors.email && (
                    <p className="text-[#F36D97] text-sm font-medium">
                      {formErrors.email.message}
                    </p>
                  )}
                </Field>
                <Field>
                  <Input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    type="password"
                    placeholder="Password"
                  />
                  {formErrors.password && (
                    <p className="text-[#F36D97] text-sm font-medium">
                      {formErrors.password.message}
                    </p>
                  )}
                </Field>
                <Field>
                  <Button
                    type="submit"
                    disabled={signInMutation.isPending}
                  >
                    {signInMutation.isPending ? "Signing in..." : "Sign in"}
                  </Button>
                  <FieldDescription className="text-center">
                    Don&apos;t have an account?{" "}
                    <Link href="/sign-up" className="underline">
                      Sign up
                    </Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
