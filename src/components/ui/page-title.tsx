import { HTMLAttributes, PropsWithChildren } from "react";

type PageTitleProps = HTMLAttributes<HTMLHeadingElement> & PropsWithChildren;

export function PageTitle({ children, ...props }: PageTitleProps) {
  return (
    <h1 {...props} className="text-3xl font-bold underline">
      {children}
    </h1>
  );
}
