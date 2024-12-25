import { type FormEvent, useState, useTransition } from "react";
import { Button, Container, Form, Input } from "@/components/ui";
import { createUser } from "@/utils/api";

export function UserForm({ refetchUsers }: { refetchUsers: () => void }) {
  const [email, setEmail] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      await createUser({
        id: crypto.randomUUID(),
        email,
      });
      startTransition(() => {
        refetchUsers();
        setEmail("");
      });
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" disabled={isPending}>
          Add
        </Button>
      </Form>
    </Container>
  );
}
