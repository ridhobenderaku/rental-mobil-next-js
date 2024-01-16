"use client";
import { useInViewport } from "react-in-viewport";
import { useEffect, useRef } from "react";

import { useContextProvider } from "@/context/ContextProvider";
import { HeaderMenu } from "@/models/header";

function CheckInView({ menuName }: { menuName: HeaderMenu }) {
  const myRef = useRef<HTMLInputElement>(null);
  const { inViewport } = useInViewport(myRef);
  const { menuActive, setMenuActive } = useContextProvider();

  useEffect(() => {
    if (inViewport) setMenuActive(menuName);
  }, [inViewport]);

  return <div ref={myRef}></div>;
}

export default CheckInView;
