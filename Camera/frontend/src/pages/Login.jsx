import {
  Anchor,
  Button,
  Checkbox,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import "./Authentication.css";

export default function Login() {
  return (
    <div className="wrapper">
      <Paper className="form" padding="xl" shadow="sm" radius="md">
        <Title order={2} className="title" align="center" mb="lg">
          Welcome back to Mantine!
        </Title>

        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
          radius="md"
          required
          type="email"
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          radius="md"
          required
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md" radius="md" type="submit">
          Login
        </Button>

        <Text align="center" mt="md">
          Don&apos;t have an account?{" "}
          <Anchor href="#" fw={500} onClick={(event) => event.preventDefault()}>
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
