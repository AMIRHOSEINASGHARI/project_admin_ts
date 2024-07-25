// mongoose
import { Document } from "mongoose";
// types
import { Product } from "./product";
import { Blog } from "./blog";

export type AdminRoll = "OWNER" | "ADMIN" | "USER";

export type Admin = Document & {
  username: String;
  password: String;
  name: String;
  email?: String;
  phoneNumber?: String;
  address?: String;
  country?: String;
  avatar?: String;
  roll: AdminRoll;
  productsCreated: Product[];
  blogsCreated: Blog[];
  createdAt: Date;
};
