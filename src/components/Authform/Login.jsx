import { Input } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import { Button } from "../ui/button";
import { Alert } from "../ui/alert";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { loading, error, login } = useLogin();
  return (
    <>
      <Input
        id="email"
        autoComplete="email"
        placeholder="Email"
        fontSize={14}
        type="email"
        value={inputs.email}
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        id="password"
        autoComplete="current-password"
        placeholder="Password"
        fontSize={14}
        type="password"
        value={inputs.password}
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          {error.message}
        </Alert>
      )}

      <Button
        w={"full"}
        colorPalette="blue"
        size={"sm"}
        fontSize={14}
        loading={loading}
        onClick={() => login(inputs)}
      >
        Login
      </Button>
    </>
  );
};

export default Login;
