"use client";

// react
import { useState } from "react";
// next
import Image from "next/image";
import { useRouter } from "next/navigation";
// z - hook-form
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// actions
import { login } from "@/actions/auth";
// hooks
import useServerAction from "@/hooks/callServerAction";
// constants
import { icons, images } from "@/constants";
import { btn_icon_variant } from "@/constants/ui";
// cmp
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";
import clsx from "clsx";

// form schema
const formSchema = z.object({
  username: z
    .string()
    .min(4, { message: "َUsername must be between 4 and 10 characters" })
    .max(10, { message: "َUsername must be between 4 and 10 characters" }),
  password: z
    .string()
    .min(4, { message: "Password must be between 4 and 10 characters" })
    .max(10, { message: "Password must be between 4 and 10 characters" }),
});

const Login = () => {
  const { replace } = useRouter();
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { fn, loading } = useServerAction(login, () => replace("/dashboard"));

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    fn(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center gap-[150px] bg-white p-[30px]"
      >
        <div className="max-xl:hidden bg-gray-100 rounded-3xl h-screen w-1/2 flex items-center justify-center">
          <Image
            src={images.authLogin}
            priority
            width={450}
            height={450}
            alt="auth-login"
          />
        </div>
        <div className="max-xl:flex max-xl:justify-center max-xl:mt-16 max-xl:w-full">
          <div className="sm:w-[400px]">
            <div className="mb-[20px]">
              <div className="mb-[30px]">
                <Image
                  src={images.logo}
                  priority
                  width={40}
                  height={40}
                  alt="logo"
                />
              </div>
              <h1 className="font-medium text-gray-600 text-[30px] mb-[10px]">
                Welcome back! 👋🏻
              </h1>
              <p className="text-gray-500 tracking-tight">
                Please sign-in to your account and start the adventure
              </p>
            </div>
            <div className="space-y-5">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        className="Transition"
                        placeholder="Enter your username..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          className="Transition"
                          placeholder="Enter your password..."
                          type={passwordType}
                          {...field}
                        />
                      </FormControl>
                      <Button
                        type="button"
                        onClick={() =>
                          setPasswordType(
                            passwordType === "password" ? "text" : "password"
                          )
                        }
                        variant={btn_icon_variant}
                        className="btn_icon absolute top-1 right-1 bottom-1"
                      >
                        {passwordType === "text"
                          ? icons.eye_open
                          : icons.eye_close}
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={loading}
                className={clsx("w-full", {
                  "bg-gray-100": loading,
                })}
              >
                {loading ? <Loader text="Sending data..." /> : "Submit"}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default Login;
