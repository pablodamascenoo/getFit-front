import TextField from "@mui/material/TextField";
import watermelon from "../../../public/watermelon.svg";
import { Form, TitleBox } from "./style.js";

export default function RegisterPage() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <TitleBox>
        <img src={watermelon} alt="watermelon" />
        <h2>GetFit</h2>
      </TitleBox>
      <Form onSubmit={handleSubmit}>
        <TextField label="name" variant="outlined"></TextField>
        <TextField label="email" variant="outlined" type="email"></TextField>
        <TextField
          label="password"
          variant="outlined"
          type="password"
        ></TextField>
        <TextField
          label="confirm password"
          variant="outlined"
          type="password"
        ></TextField>
      </Form>
    </>
  );
}
