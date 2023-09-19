import { useEffect, useRef } from "react";

export const useMouseHoverDropDown = (callback: (bool: boolean) => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const open = () => callback(true);
    const close = () => callback(false);

    const element = ref.current;

    element?.addEventListener("mouseover", open);
    element?.addEventListener("mousedown", close);
    element?.addEventListener("mouseout", close);

    return () => {
      element?.removeEventListener("mouseenter", open);
      element?.removeEventListener("mousedown", close);
      element?.removeEventListener("mouseout", close);
    };
  }, [callback]);

  return ref;
};
