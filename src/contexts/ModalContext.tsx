"use client"

import { createContext, useState } from "react";

export const ModalContext = createContext({
  isModalOpen: false,
  setModal: (bool: boolean) => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const setModal = (bool: boolean) => setIsOpen(bool);

  return (
    <ModalContext.Provider value={{ isModalOpen: isOpen, setModal }}>
      {children}
    </ModalContext.Provider>
  );
}
