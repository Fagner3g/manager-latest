"use client";
import { useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

import AuthCard from "./auth-card";
import AuthFormMessage from "./auth-form-message";

import { verifyToken } from "@/actions/auth";

const EmailVerificationForm = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const searchParams = useSearchParams();
  if (!searchParams || !searchParams.has("token")) return null;
  const token = searchParams.get("token");

  const automaticSubmission = useCallback(() => {
    if (error || success) return;

    if (!token) {
      setError("Token inválido");
      return;
    }

    verifyToken(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Algo deu errado");
      });
  }, [token, success, error]);

  useEffect(() => {
    automaticSubmission();
  }, [automaticSubmission]);
  return (
    <div className="flex flex-1 items-center justify-center">
      <AuthCard title="Verifique seu E-mail">
        {success && <AuthFormMessage title="Sucesso" type="success" message={success} />}
        {error && <AuthFormMessage title="Encontramos um problema" type="error" message={error} />}
      </AuthCard>
    </div>
  );
};

export default EmailVerificationForm;
