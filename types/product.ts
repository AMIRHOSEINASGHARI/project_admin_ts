// mongoose
import { Document } from "mongoose";
// types
import { Admin } from "./admin";
import { Order } from "./order";
import { Comment } from "./comment";
import { Like } from "./like";

export type Product = Document & {
  title: String;
  description: String;
  image: String;
  price: Number;
  stock: Number;
  discount?: Number | undefined | null;
  category: String;
  keywords: String[];
  brand: String;
  orders?: Order[];
  comments?: Comment[];
  likes?: Like[];
  published: Boolean;
  createdBy: Admin;
  createdAt: Date;
};
