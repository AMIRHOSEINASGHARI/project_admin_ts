// mongoose
import { Document } from "mongoose";
import { Product } from "./product";
import { User } from "./user";
// types

export type OrderStatus = "Pending" | "Completed";

export type PaymentMethod = "Cash On Delivery" | "Credit Card" | "Paypal";

export type OrderItems = {
  productId: Product;
  quantity: Number;
  cost: Number;
  discount: Number;
};

export type OrderSummary = {
  totalProducts: Number;
  totalPrice: Number;
  totalDiscount: Number;
  totalPayable: Number;
};

export type Order = Document & {
  status: OrderStatus;
  deliveryAddress: String;
  userId: User;
  phoneNumber: Number;
  displayName: String;
  paymentMethod: PaymentMethod;
  items: OrderItems;
  summary: OrderSummary;
  createdAt: Date;
};
