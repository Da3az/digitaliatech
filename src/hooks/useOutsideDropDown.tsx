import { useEffect, useRef } from "react";

export const useOutsideDropDown = (callback: (bool: boolean) => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = () => callback(false);
    const element = ref.current;

    // element?.addEventListener("mouseover", open);
    // element?.addEventListener("mousedown", close);
    ref.current?.addEventListener("mouseout", close);

    return () => {
      //   element?.removeEventListener("mouseenter", open);
      //   element?.removeEventListener("mousedown", close);
      element?.removeEventListener("mouseout", close);
    };
  }, [callback]);

  return ref;
};
