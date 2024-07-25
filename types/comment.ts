// mongoose
import { Document } from "mongoose";
// types
import { Product } from "./product";
import { User } from "./user";

export type CommentStatus = "Not-Answered" | "Answered";

export type Comment = Document & {
  title: String;
  description: String;
  productId: Product;
  senderId: User;
  answer?: String;
  status: CommentStatus;
  published: Boolean;
  createdAt: Date;
};
