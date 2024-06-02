"use client";

import { Loader } from "@/components/loader";
import { AuthProvider } from "@/context/use-auth-context";
import { useSignInForm } from "@/hooks/sign-in/use-sign-in";
import React from "react";
import { FormProvider } from "react-hook-form";

type Props = {
  children: React.ReactNode;
};

function SignInFormProvider({ children }: Props) {
  const { loading, methods, onHandleSubmit } = useSignInForm();
  return (
    <AuthProvider>
      <FormProvider {...methods}>
        <form onSubmit={onHandleSubmit} className="h-full">
          <div className="flex flex-col justify-between gap-3 h-full">
            <Loader loading={loading}>{children}</Loader>
          </div>
        </form>
      </FormProvider>
    </AuthProvider>
  );
}

export default SignInFormProvider;
