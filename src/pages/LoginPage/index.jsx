import { TextField, Button } from "@mui/material";
import { useState, useContext } from "react";
import { TailSpin } from "react-loader-spinner";
import api from "../../services/api.js";
import UserContext from "../../contexts/UserContext.js";

import watermelon from "../../../public/watermelon.svg";
import { Form, TitleBox, Container } from "../RegisterPage/style.js";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const [login, SetLogin] = useState({
    email: "",
    password: "",
  });

  const [submited, SetSubmited] = useState(false);
  const { SetUserInfo } = useContext(UserContext);

  const navigate = useNavigate();

  function handleInput(e) {
    login[e.target.name] = e.target.value;
    SetLogin({ ...login });
  }

  const { email, password } = login;

  function handleSubmit(e) {
    e.preventDefault();

    SetSubmited(true);

    const promisse = api.post("/auth/sign-in", { ...login });

    promisse.then((obj) => {
      const { data } = obj;
      localStorage.setItem("UserInfo", JSON.stringify({ ...data }));
      SetUserInfo({ token: data.token, name: data.name });
      navigate("/");
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
          label="email"
          variant="outlined"
          name="email"
          type="email"
          onChange={handleInput}
          value={login.email}
          disabled={submited}
          required
        ></TextField>
        <TextField
          label="password"
          variant="outlined"
          name="password"
          type="password"
          onChange={handleInput}
          value={login.password}
          disabled={submited}
          required
        ></TextField>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          disabled={!(email && password) || submited}
        >
          {submited ? (
            <TailSpin
              height={30}
              width={30}
              radius={1}
              color={"#285576"}
            ></TailSpin>
          ) : (
            "Sign in"
          )}
        </Button>
      </Form>
      <Link to={"/auth/sign-up"}>
        <Button sx={{ fontSize: 12 }} variant="text">
          create account
        </Button>
      </Link>
    </Container>
  );
}
