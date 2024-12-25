import React, { HTMLAttributes } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, ...props }: ContainerProps): JSX.Element {
  return (
    <div {...props} className="container mx-auto">
      {children}
    </div>
  );
}
