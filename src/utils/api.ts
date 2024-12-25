import type { User } from "@/types";

export async function fetchUsers() {
  const response = await fetch("http://localhost:3001/users");
  const users = (await response.json()) as Promise<User[]>;
  return users;
}

export async function createUser(user: User) {
  const response = await fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const createdUser = await response.json();
  return createdUser;
}

export async function deleteUser(id: string) {
  const response = await fetch(`http://localhost:3001/users/${id}`, {
    method: "DELETE",
  });
  const deletedUser = await response.json();
  return deletedUser;
}
