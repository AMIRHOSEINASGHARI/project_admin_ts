import {
  AiOutlineComment,
  AiOutlineHome,
  AiOutlinePlusCircle,
  AiOutlineTruck,
} from "react-icons/ai";
import { LiaBitcoin } from "react-icons/lia";
import { TbBasket } from "react-icons/tb";
import {
  PiEye,
  PiEyeClosed,
  PiEyeClosedLight,
  PiEyeLight,
  PiPower,
  PiUsersThree,
} from "react-icons/pi";
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

export const icons = {
  eye_open: <PiEye />,
  eye_close: <PiEyeClosed />,
  home: <AiOutlineHome />,
  crypto: <LiaBitcoin />,
  orders: <AiOutlineTruck />,
  products: <TbBasket />,
  plus: <AiOutlinePlusCircle />,
  comments: <AiOutlineComment />,
  users: <PiUsersThree />,
  blogs: <RiBloggerLine />,
  tasks: <LuListTodo />,
  account: <MdOutlineManageAccounts />,
  power: <PiPower />,
};

export const sidebarMenuLinks = [
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

export const showProfileLinks = [
  {
    name: "Home",
    icon: icons.home,
    href: "/dashboard",
  },
  {
    name: "Profile",
    icon: icons.account,
    href: "/account",
  },
  {
    name: "Tasks",
    icon: icons.tasks,
    href: "/tasks",
  },
  {
    name: "Products",
    icon: icons.products,
    href: "/products",
  },
  {
    name: "New Product",
    icon: icons.plus,
    href: "/add-product",
  },
];
