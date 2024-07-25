// next
import { redirect } from "next/navigation";
// utils
import { getServerSession } from "@/utils/session";
import React from "react";
import Navbar from "@/components/shared/Navbar";

const PagesLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default PagesLayout;
