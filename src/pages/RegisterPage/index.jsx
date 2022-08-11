import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import api from "../../services/api.js";

import watermelon from "../../../public/watermelon.svg";
import { Form, TitleBox, Container } from "./style.js";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
  const [register, SetRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorText, SetErrorText] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [submited, SetSubmited] = useState(false);
  const navigate = useNavigate();

  function handleInput(e) {
    register[e.target.name] = e.target.value;
    SetRegister({ ...register });
  }

  const { name, email, password, confirmPassword } = register;

  function handleSubmit(e) {
    e.preventDefault();

    SetErrorText({ name: "", email: "", password: "", confirmPassword: "" });

    if (name.length < 3) {
      SetErrorText({ ...errorText, name: "at least 3 characters" });
      return;
    }
    if (password.length < 5) {
      SetErrorText({ ...errorText, password: "at least 5 characters" });
      return;
    }
    if (confirmPassword !== password) {
      SetErrorText({
        ...errorText,
        confirmPassword: "passwords must match",
      });
      return;
    }

    SetSubmited(true);

    const promisse = api.post("/auth/sign-up", { ...register });

    promisse.then(() => {
      navigate("/auth/sign-in");
      return;
    });

    promisse.catch((error) => {
      alert(error.response.data);
    });

    SetSubmited(false);
  }

  return (
    <Container>
      <TitleBox>
        <img src={watermelon} alt="watermelon" />
        <h2>GetFit</h2>
      </TitleBox>
      <Form onSubmit={handleSubmit}>
        <TextField
          label="name"
          variant="outlined"
          name="name"
          onChange={handleInput}
          value={register.name}
          disabled={submited}
          required
          error={errorText.name}
          helperText={errorText.name}
        ></TextField>
        <TextField
          label="email"
          variant="outlined"
          name="email"
          type="email"
          onChange={handleInput}
          value={register.email}
          disabled={submited}
          required
          error={errorText.email}
          helperText={errorText.email}
        ></TextField>
        <TextField
          label="password"
          variant="outlined"
          name="password"
          type="password"
          onChange={handleInput}
          value={register.password}
          disabled={submited}
          required
          error={errorText.password}
          helperText={errorText.password}
        ></TextField>
        <TextField
          label="confirm password"
          variant="outlined"
          name="confirmPassword"
          type="password"
          onChange={handleInput}
          value={register.confirmPassword}
          disabled={submited}
          required
          error={errorText.confirmPassword}
          helperText={errorText.confirmPassword}
        ></TextField>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          disabled={!(name && email && password && confirmPassword) || submited}
        >
          {submited ? (
            <TailSpin
              height={30}
              width={30}
              radius={1}
              color={"#285576"}
            ></TailSpin>
          ) : (
            "Sign up"
          )}
        </Button>
      </Form>
      <Link to={"/auth/sign-in"}>
        <Button sx={{ fontSize: 12 }} variant="text">
          sign in
        </Button>
      </Link>
    </Container>
  );
}
