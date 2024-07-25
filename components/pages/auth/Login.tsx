"use client";

// react
import { useState } from "react";
// next
import Image from "next/image";
// z - hook-form
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// constants
import { icons, images } from "@/constants";
import { btn_icon_variant } from "@/constants/ui";
// shadcn ui
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
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  ); // for changing type of password input
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <div className="h-screen w-full flex items-center justify-center max-md:p-4">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 max-md:w-full md:w-[350px]"
        >
          <div>
            <Image
              src={images.logo}
              priority
              width={40}
              height={40}
              alt="logo"
              className="mb-[30px]"
            />
            <h1 className="font-medium text-gray-600 text-[30px] mb-[10px]">
              Welcome back! 👋🏻
            </h1>
          </div>
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
                    onClick={() =>
                      setPasswordType(
                        passwordType === "password" ? "text" : "password"
                      )
                    }
                    variant={btn_icon_variant}
                    className="btn_icon absolute top-1 right-1 bottom-1"
                  >
                    {passwordType === "password"
                      ? icons.eye_open
                      : icons.eye_close}
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </Form>
  );
};

export default Login;
