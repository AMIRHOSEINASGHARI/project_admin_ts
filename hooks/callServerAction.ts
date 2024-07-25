"use client";

import { useToast } from "@/components/ui/use-toast";
// react
import { useState } from "react";

const useServerAction = (
  asyncAction: Function,
  fnInput: object,
  afterAction?: Function
): { loading: boolean; fn: Function } => {
  // asyncAction => to calling server action
  // fnInput => the input of server action
  // afterAction => the action we want to be done after the server action is done

  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const fn = async () => {
    setLoading(() => true);
    const result = await asyncAction(fnInput);
    setLoading(() => false);

    toast({
      title: result.message,
      variant: result.code === 200 ? "default" : "destructive",
    });

    afterAction && afterAction();
  };

  return {
    loading,
    fn,
  };
};

export default useServerAction;
