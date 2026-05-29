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
import { signUp } from "../../../lib/auth-client";
import { useMutation } from "@tanstack/react-query";

type SignUpFormData = {
  name: string;
  email: string;
  password: string;
};

export default function SignUpPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: {
      errors: formErrors,
    },
  } = useForm<SignUpFormData>();

  const signUpMutation = useMutation({
    mutationFn: async (data: SignUpFormData) => {
      const response = await signUp.email(data);
      if (response.error) throw new Error(response.error.message);
      return response.data;
    },
    onSuccess: () => {
      router.push("/dashboard");
    },
  });

  function onSubmit(data: SignUpFormData) {
    signUpMutation.mutate(data);
  }

  return (
    <main className="min-h-svh w-full flex items-center justify-center">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>
              Sign up to get started with your account
            </CardDescription>
            {signUpMutation.isError && (
              <p className="text-[#F36D97] text-sm font-medium">
                {signUpMutation.error.message}
              </p>
            )}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FieldGroup>
                <Field>
                  <Input
                    {...register("name", {
                      required: "Name is required",
                    })}
                    placeholder="Name"
                  />
                  {formErrors.name && (
                    <p className="text-[#F36D97] text-sm font-medium">
                      {formErrors.name.message}
                    </p>
                  )}
                </Field>
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
                      minLength: {
                        value: 8,
                        message: "Minimum 8 characters",
                      },
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
                    disabled={signUpMutation.isPending}
                  >
                    {signUpMutation.isPending ? "Signing up..." : "Sign up"}
                  </Button>
                  <FieldDescription className="text-center">
                    Already have an account?{" "}
                    <Link href="/sign-in" className="underline">
                      Sign in
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
