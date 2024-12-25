import { Button, ListItem } from "@/components/ui";
import type { User } from "@/types";

export function UserCard({ user }: { user: User }) {
  return (
    <ListItem>
      {user.email}
      <Button type="button" variant="danger">
        Delete
      </Button>
    </ListItem>
  );
}
