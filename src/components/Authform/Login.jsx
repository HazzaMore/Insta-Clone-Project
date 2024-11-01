import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

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

      <Button w={"full"} colorPalette="blue" size={"sm"} fontSize={14}>
        Login
      </Button>
    </>
  );
};

export default Login;
