import React, { HTMLAttributes } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, ...props }: ContainerProps) {
  return (
    <div {...props} className="container mx-auto px-4">
      {children}
    </div>
  );
}
