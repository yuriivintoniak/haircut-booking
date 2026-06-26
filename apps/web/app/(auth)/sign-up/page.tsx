"use client";

import {
  ArrowLeft,
  Eye,
  EyeClosed,
  Lock,
  Mail,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { AuthTabs } from "../AuthTabs";
import { signUp } from "../../../lib/auth-client";
import { Input } from "@repo/ui/components/input";
import { Button } from "@repo/ui/components/button";
import { Card, CardContent } from "@repo/ui/components/card";

type SignUpFormData = {
  name: string;
  email: string;
  password: string;
};

export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

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
      router.push("/?auth=signup-success");
    },
  });

  function onSubmit(data: SignUpFormData) {
    signUpMutation.mutate(data);
  }

  return (
    <main className="relative min-h-svh w-full flex items-center justify-center py-20 px-4 md:px-8 bg-secondary">
      <Link 
        href="/"
        className="absolute top-4 left-4 md:top-8 md:left-8 flex items-center gap-1 text-muted-foreground transition-all duration-300 hover:-translate-x-[5px] hover:text-primary-accent"
      >
        <ArrowLeft className="size-4" />
        Go back
      </Link>

      <div className="w-full sm:max-w-xl">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-display text-secondary-foreground text-5xl sm:text-6xl uppercase tracking-tight">
            Join The Chair
          </h2>
          <p className="text-center text-muted-foreground sm:text-lg max-w-sm">
            Create an account to book appointments and unlock member perks.
          </p>
        </div>

        <AuthTabs />

        <Card className="bg-transparent border-none p-0 pt-6">
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full flex flex-col gap-4 sm:gap-6">
                <div>
                  <div className={`input-group ${
                    formErrors.name ? "border-[#F36D97]" : ""
                  }`}>
                    <User size={16} className="text-primary/40" />
                    <Input
                      {...register("name", {
                        required: "Name is required",
                      })}
                      placeholder="Name"
                      className="flex-1 placeholder:text-primary/40"
                    />
                  </div>
                  {formErrors.name && (
                    <p className="mt-2 text-[#F36D97] text-sm font-medium">
                      {formErrors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <div className={`input-group ${
                    formErrors.email ? "border-[#F36D97]" : ""
                  }`}>
                    <Mail size={16} className="text-primary/40" />
                    <Input
                      {...register("email", {
                        required: "Email is required",
                      })}
                      type="email"
                      placeholder="Email"
                      className="flex-1 placeholder:text-primary/40"
                    />
                  </div>
                  {formErrors.email && (
                    <p className="mt-2 text-[#F36D97] text-sm font-medium">
                      {formErrors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <div className={`input-group ${
                    formErrors.password ? "border-[#F36D97]" : ""
                  }`}>
                    <Lock size={16} className="text-primary/40" />
                    <Input
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Minimum 8 characters",
                        },
                      })}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="flex-1 placeholder:text-primary/40"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="text-primary/40 hover:text-primary-accent transition-colors duration-300 cursor-pointer"
                    >
                      {showPassword ? <EyeClosed size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {formErrors.password && (
                    <p className="mt-2 text-[#F36D97] text-sm font-medium">
                      {formErrors.password.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={signUpMutation.isPending}
                  className="text-base text-secondary bg-secondary-foreground p-4 cursor-pointer hover:bg-secondary-foreground/80 transition-colors duration-300"
                >
                  {signUpMutation.isPending ? "Signing up..." : "Sign up"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
