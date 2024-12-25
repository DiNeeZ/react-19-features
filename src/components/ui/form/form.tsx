import { FormHTMLAttributes, PropsWithChildren } from "react";

type FormProps = PropsWithChildren & FormHTMLAttributes<HTMLFormElement>;

export function Form({ children, ...props }: FormProps) {
  return (
    <form className="flex gap-2" {...props}>
      {children}
    </form>
  );
}
