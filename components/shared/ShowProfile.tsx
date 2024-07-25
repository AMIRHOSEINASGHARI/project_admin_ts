"use client";

// next
import Link from "next/link";
// hooks
import useSession from "@/hooks/session";
// constants
import { icons, images, showProfileLinks } from "@/constants";
// cmp
import Loader from "./Loader";
import SignoutButton from "./SignoutButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const ShowProfile = () => {
  const { data: session, isError, isLoading } = useSession();

  if (isLoading) {
    return <Skeleton className="w-[40px] h-[40px] rounded-full bg-gray-300" />;
  }

  if (isError) {
    return <p>!</p>;
  }

  return (
    <>
      <DropdownMenu defaultOpen={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="p-0">
            <Avatar>
              <AvatarImage src={session?.session?.avatar || images.admin} />
              <AvatarFallback>
                <Loader />
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 outline-none mx-4" sideOffset={10}>
          <DropdownMenuLabel>
            <div>
              <div className="flex items-center justify-between">
                <h1>{session?.session?.username}</h1>
                <Badge variant="secondary">{session?.session?.roll}</Badge>
              </div>
              <p className="text-[14px] font-light capitalize">
                {session?.session?.name}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {showProfileLinks.map((link) => (
            <DropdownMenuItem key={link.name} className="p-0 h-auto w-auto">
              <Button asChild variant="ghost" className="">
                <Link href={link.href} className="flex gap-4">
                  <div className="text-[20px]">{link.icon}</div>
                  <p>{link.name}</p>
                </Link>
              </Button>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <SignoutButton
            variant="ghost"
            className="text-base w-full"
            title={
              <div className="flex gap-4 w-full">
                <div className="text-[20px]">{icons.power}</div>
                <p>Exit</p>
              </div>
            }
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ShowProfile;
