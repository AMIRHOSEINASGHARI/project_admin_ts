import {
  AiOutlineComment,
  AiOutlineHome,
  AiOutlinePlusCircle,
  AiOutlineTruck,
} from "react-icons/ai";
import { LiaBitcoin } from "react-icons/lia";
import { TbBasket } from "react-icons/tb";
import { PiUsersThree } from "react-icons/pi";
import { RiBloggerLine } from "react-icons/ri";
import { LuListTodo } from "react-icons/lu";
import { MdOutlineManageAccounts } from "react-icons/md";

export const images = {
  logo: "/images/logo1.svg",
  authLogin: "/images/auth-login.png",
  authRegister: "/images/auth-register.png",
  person: "/images/man.png",
  admin: "/images/admin-1.jpg",
  admin2: "/images/admin-2.jpg",
  admin3: "/images/admin-3.jpg",
  notFound: "/images/404.svg",
  notAllowed: "/images/not-allowed.png",
  error: "/images/sad.png",
};

export const menuLinks = [
  {
    title: "Dashboard",
    image: <AiOutlineHome />,
    link: "/dashboard",
  },
  {
    title: "Crypto",
    image: <LiaBitcoin />,
    link: "/crypto",
  },
  {
    title: "Orders",
    image: <AiOutlineTruck />,
    link: "/orders",
  },
  {
    title: "Products",
    image: <TbBasket />,
    link: "/products",
  },
  {
    title: "Add Product",
    image: <AiOutlinePlusCircle />,
    link: "/add-product",
  },
  {
    title: "Comments",
    image: <AiOutlineComment />,
    link: "/comments",
  },
  {
    title: "Users",
    image: <PiUsersThree />,
    link: "/users",
  },
  {
    title: "Blogs",
    image: <RiBloggerLine />,
    link: "/blogs",
  },
  {
    title: "Add Blog",
    image: <AiOutlinePlusCircle />,
    link: "/add-blog",
  },
  {
    title: "Tasks",
    image: <LuListTodo />,
    link: "/tasks",
  },
  {
    title: "Account",
    image: <MdOutlineManageAccounts />,
    link: "/account",
  },
];
