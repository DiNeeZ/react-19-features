import { PropsWithChildren, HTMLAttributes } from "react";

type UsersListProps = PropsWithChildren & HTMLAttributes<HTMLUListElement>;

export function List({ children, ...props }: UsersListProps) {
  return (
    <ul className="flex flex-col" {...props}>
      {children}
    </ul>
  );
}
