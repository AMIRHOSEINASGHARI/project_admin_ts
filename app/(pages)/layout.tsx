// next
import { redirect } from "next/navigation";
// utils
import { getServerSession } from "@/utils/session";
import React from "react";

const PagesLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = getServerSession();

  if (!session) {
    redirect("/login");
  }

  return <div>{children}</div>;
};

export default PagesLayout;
