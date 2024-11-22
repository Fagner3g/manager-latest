import { NextResponse } from "next/server";

import { auth } from "@/auth";

export const GET = auth((req) => {
  if (req.auth)
    return NextResponse.json({
      message: "Usuário Autenticado",
    });
  return NextResponse.json(
    {
      message: "Não Autenticado",
    },
    {
      status: 401,
    },
  );
});
