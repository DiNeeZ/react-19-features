import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonBase = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonVariants = "primary" | "danger";
interface ButtonProps extends ButtonBase {
  variant?: ButtonVariants;
}

const buttonClassNames: Partial<Record<ButtonVariants, string>> = {
  primary: "bg-blue-500 hover:bg-blue-700",
  danger: "bg-red-500  hover:bg-red-700",
};

export function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`rounded px-4 py-2 font-bold text-white duration-150 ${buttonClassNames[variant]} disabled:bg-gray-400`}
    >
      {children}
    </button>
  );
}
