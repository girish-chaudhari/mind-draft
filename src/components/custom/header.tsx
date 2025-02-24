"use client";

import { NAV_ITEMS } from "@/constants";
import MaxWidthContainer from "./max-width-container";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-opacity-10 backdrop-blur-lg">
      <MaxWidthContainer className="flex items-center justify-between">
        <div className="font-[Gabriela] text-primary font-bold text-2xl ">
          MindTree Canva
        </div>
        <ul className="flex gap-5 text-lg">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>{item.label}</li>
          ))}
        </ul>
        <Button>Sign In</Button>
      </MaxWidthContainer>
    </div>
  );
};

export default Header;
