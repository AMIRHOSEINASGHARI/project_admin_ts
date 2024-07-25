"use client";

// react
import React from "react";
// actions
import { signOut } from "@/actions/auth";
// cmp
import { Button } from "../ui/button";
import { PiPower } from "react-icons/pi";

const SignoutButton = ({
  title,
  className,
  variant,
}: {
  title?: React.ReactNode;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}) => {
  return (
    <Button
      className={className || "btn_icon"}
      variant={variant}
      onClick={() => signOut()}
    >
      {title ? title : <PiPower />}
    </Button>
  );
};

export default SignoutButton;
