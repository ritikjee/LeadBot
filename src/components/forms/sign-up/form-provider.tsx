"use client";

import React from "react";
import { Loader } from "@/components/loader";
import { AuthProvider } from "@/context/use-auth-context";
import UseSignUpForm from "@/hooks/sign-up/use-sign-up";
import { FormProvider } from "react-hook-form";

type Props = {
  children: React.ReactNode;
};

function SignUpFormProvider({ children }: Props) {
  const { methods, onHandleSubmit, loading } = UseSignUpForm();
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

export default SignUpFormProvider;
