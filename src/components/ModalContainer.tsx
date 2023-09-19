"use client";

import { ModalContext } from "@/contexts/ModalContext";
import { useContext } from "react";

const ModalContainer = ({ children }: { children: React.ReactNode }) => {
  const {isModalOpen} = useContext(ModalContext);
  return (
    <>
      {isModalOpen && (
        <div
          className={`absolute z-10   opacity-30 top-0 left-0 w-full h-full ${!isModalOpen ? 'bg-transparent' : 'bg-black'}  transition-[background] `}
        />
      )}
      {children}
    </>
  );
};

export default ModalContainer;
