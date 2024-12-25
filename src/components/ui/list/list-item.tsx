import { PropsWithChildren, LiHTMLAttributes } from "react";

type UsersListItemProps = PropsWithChildren & LiHTMLAttributes<HTMLLIElement>;

export function ListItem({ children, ...props }: UsersListItemProps) {
  return (
    <li
      className="m-2 flex items-center justify-between rounded border bg-gray-100 px-4 py-2"
      {...props}
    >
      {children}
    </li>
  );
}
