import { useCallback } from "react";
import { toaster } from "../components/ui/Toaster";

const useShowToast = () => {
  // useCallback is used to prevent an infinite loopby caching the function
  const showToast = useCallback((title, description, status) => {
    toaster.create({
      type: status,
      title: title,
      description: description,
      duration: 3000,
    });
  },[toaster]);

  return showToast;
};

export default useShowToast;
