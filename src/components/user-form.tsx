import { type FormEvent, useState } from "react";
import { Button, Container, Form, Input } from "@/components/ui";
import { createUser } from "@/utils/api";

export function UserForm({ refetchUsers }: { refetchUsers: () => void }) {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createUser({
      id: crypto.randomUUID(),
      email,
    });
    refetchUsers();
    setEmail("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit">Add</Button>
      </Form>
    </Container>
  );
}
