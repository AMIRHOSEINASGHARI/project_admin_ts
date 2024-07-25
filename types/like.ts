// mongoose
import { Document } from "mongoose";
// types
import { Product } from "./product";
import { Blog } from "./blog";
import { User } from "./user";

export type Like = Document & {
  type: "product" | "blog";
  user: User;
  product?: Product | undefined | null;
  blog?: Blog | undefined | null;
};
