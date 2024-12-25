import { UserForm, UsersList } from "@/components";
import { Main, Container, PageTitle } from "@/components/ui";
import { fetchUsers } from "@/utils/api";
import { Suspense, useState } from "react";

const defaultUsersPromise = fetchUsers();

export function UsersPage() {
  const [usersPromise, setUsersPromise] = useState(defaultUsersPromise);
  const refetchUsers = () => {
    setUsersPromise(fetchUsers());
  };

  return (
    <Main>
      <Container>
        <PageTitle>Users</PageTitle>
      </Container>
      <section>
        <UserForm refetchUsers={refetchUsers} />
      </section>
      <section>
        <Container>
          <Suspense fallback={<h1>Loading...</h1>}>
            <UsersList usersPromise={usersPromise} />
          </Suspense>
        </Container>
      </section>
    </Main>
  );
}
