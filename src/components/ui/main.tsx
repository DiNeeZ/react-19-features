import { PropsWithChildren, HTMLAttributes } from "react";

type MainProps = PropsWithChildren & HTMLAttributes<HTMLElement>;

export function Main({ children, ...props }: MainProps) {
  return (
    <main className="flex flex-col gap-6 py-10" {...props}>
      {children}
    </main>
  );
}
