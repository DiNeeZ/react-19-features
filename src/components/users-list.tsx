import { use } from "react";
import { Container, List } from "@/components/ui";
import { UserCard } from "@/components/user-card";
import type { User } from "@/types";

export function UsersList({ usersPromise }: { usersPromise: Promise<User[]> }) {
  const users = use(usersPromise);

  return (
    <Container>
      <List>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </List>
    </Container>
  );
}
