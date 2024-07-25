// mongoose
import { Document } from "mongoose";
// types
import { Admin } from "./admin";

export type TaskStatus = "Todo" | "Progress" | "Done";

export type Task = Document & {
  title: String;
  description?: String;
  status: TaskStatus;
  createdBy: Admin;
  dueDate: Date;
  createdAt: Date;
};
