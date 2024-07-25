"use client";

// react query
import { useQuery } from "@tanstack/react-query";
// services
import { fetchSession } from "@/services/queries";
import { AdminRoll } from "@/types/admin";

export type Session = {
  username: string;
  userId: string;
  name: string;
  avatar: string | null | undefined;
  roll: AdminRoll;
  iat: number;
  exp: number;
};

const useSession = (): {
  data: { session: Session; message: string; success: boolean };
  isLoading: boolean;
  isError: boolean;
  error: unknown;
} => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["session"],
    queryFn: fetchSession,
    retry: 1,
    staleTime: 1 * 60 * 60,
    cacheTime: 1 * 60 * 60,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};

export default useSession;
