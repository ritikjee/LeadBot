"use client";

import React, { createContext, useContext, useState } from "react";

type InitialValuesProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const InitialValues: InitialValuesProps = {
  currentStep: 1,
  setCurrentStep: () => undefined,
};

const AuthContext = createContext(InitialValues);

const { Provider } = AuthContext;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStep, setCurrentStep] = useState<number>(
    InitialValues.currentStep
  );

  const value = {
    currentStep,
    setCurrentStep,
  };

  return <Provider value={value}>{children}</Provider>;
};

export const useAuth = () => {
  if (!useContext(AuthContext)) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return React.useContext(AuthContext);
};
