import { PropsWithChildren, HTMLAttributes } from "react";

type UsersListProps = PropsWithChildren & HTMLAttributes<HTMLUListElement>;

export function List({ children, ...props }: UsersListProps) {
  return (
    <ul className="flex flex-col gap-4" {...props}>
      {children}
    </ul>
  );
}
