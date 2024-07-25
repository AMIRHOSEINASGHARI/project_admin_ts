// mongoose
import { Document } from "mongoose";
// types
import { Admin } from "./admin";
import { Like } from "./like";

export type Blog = Document & {
  title: String;
  description: String;
  image: String;
  keywords: String[];
  likes?: Like[];
  published: Boolean;
  createdBy: Admin;
  createdAt: Date;
};
