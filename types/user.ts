// mongoose
import { Document } from "mongoose";
// types
import { Order } from "./order";
import { Like } from "./like";
import { Comment } from "./comment";
import { Product } from "./product";

export type UserCart = {
  items: [
    {
      productId: Product;
      quantity: Number;
    }
  ];
  selectedItems: Product[];
  totalProductsCount: Number;
  checkoutStatus: "pending" | "completed";
};

export type User = Document & {
  username: String;
  displayName?: String | undefined | null;
  password: String;
  avatar?: String | undefined | null;
  phoneNumber?: Number;
  address?: String;
  orders?: Order[];
  likes?: Like[];
  comments?: Comment[];
  cart?: UserCart;
  createdAt: Date;
};
