"use server";

// next
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
// utils
import connectDB from "@/utils/connectDB";
import { verifyPassword } from "@/utils/functions";
// models
import Admin from "@/utils/models/admin";
// jwt
import { sign } from "jsonwebtoken";
import { SECRET_KEY, SESSION_EXPIRATION } from "@/utils/vars";

export const login = async (data: {
  username: string;
  password: string;
}): Promise<{
  message: string;
  status: string;
  code: number;
} | void> => {
  try {
    await connectDB();

    const { username, password } = data;

    const admin = await Admin.findOne({ username });

    if (!admin) {
      return {
        message: "User not found!",
        status: "failed",
        code: 404,
      };
    }

    // verify password
    const isValidPassword = await verifyPassword(password, admin.password);

    if (!isValidPassword) {
      return {
        message: "Username or password is incorrect!",
        status: "failed",
        code: 404,
      };
    }

    // creating token
    const accessToken = sign(
      {
        username,
        userId: admin._id,
        name: admin.name,
        avatar: admin.avatar,
        roll: admin.roll,
      },
      SECRET_KEY || "",
      {
        expiresIn: SESSION_EXPIRATION,
      }
    );

    // setting token in cookie
    cookies().set("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + SESSION_EXPIRATION),
      sameSite: "lax",
      path: "/",
    });

    return {
      message: "Logged in successfully!",
      status: "success",
      code: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "Server Error!",
      status: "failed",
      code: 500,
    };
  }
};

export const signOut = () => {
  cookies().delete("accessToken");
  redirect("/");
};
