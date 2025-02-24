"use client";

import clsx from "clsx";
import React from "react";

const MaxWidthContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <div className={clsx("container mx-auto px-5 py-3", className)}>
        {children}
      </div>
    </>
  );
};

export default MaxWidthContainer;
