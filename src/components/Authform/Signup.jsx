import { Input } from "@chakra-ui/react";
import { Alert } from "../ui/alert";
import { Button } from "../ui/button";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { InputGroup } from "../ui/input-group";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, signup } = useSignUpWithEmailAndPassword();

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
        id="username"
        autoComplete="username"
        placeholder="Username"
        fontSize={14}
        type="text"
        value={inputs.username}
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />
      <Input
        id="fullname"
        autoComplete="name"
        placeholder="Full Name"
        fontSize={14}
        type="text"
        value={inputs.fullname}
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
      />
      <InputGroup
        w={"full"}
        endElement={
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        }
      >
        <Input
          id="password"
          autoComplete="new-password"
          placeholder="Password"
          fontSize={14}
          type={showPassword ? "text" : "password"}
          value={inputs.password}
          size={"sm"}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
      </InputGroup>

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
        onClick={() => signup(inputs)}
      >
        Sign Up
      </Button>
    </>
  );
};

export default Signup;
