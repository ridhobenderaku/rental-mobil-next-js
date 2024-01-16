"use client";
import { createContext, useContext, useState } from "react";
import { HeaderMenu } from "@/models/header";

const context = createContext<any>({
  menuActive: HeaderMenu.Home,
  setMenuActive: () => {},
});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [menuActive, setMenuActive] = useState(HeaderMenu.Home);
  return (
    <context.Provider value={{ menuActive, setMenuActive }}>
      {children}
    </context.Provider>
  );
};

export const useContextProvider = () => useContext(context);
