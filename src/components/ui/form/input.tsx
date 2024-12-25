import { InputHTMLAttributes } from "react";

export function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className="rounded border p-2" {...props} />;
}
