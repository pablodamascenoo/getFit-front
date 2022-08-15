import { Modal, Box, TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import userContext from "../../contexts/UserContext.js";
import api from "../../services/api.js";

import { Title, Form } from "./style.js";

export default function ModalForm({ open, handleClose, type }) {
  const [mealInput, SetMealInput] = useState({ name: "", calories: "" });
  const [waterInput, SetWaterInput] = useState("");
  const [submited, SetSubmited] = useState(false);
  const { userInfo } = useContext(userContext);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "5px",
    p: 4,
  };

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo?.token}`,
    },
  };

  function handleMealInput(e) {
    const name = e.target.name;
    const value =
      name === "calories" && e.target.value < 0 ? 0 : e.target.value;
    mealInput[name] = value;
    SetMealInput({ ...mealInput });
  }

  function handleWaterInput(e) {
    const value = e.target.value < 0 ? 0 : e.target.value;
    SetWaterInput(value);
  }

  function handleMealSubmit(e) {
    SetSubmited(true);

    const promisse = api.post(
      "/meals",
      { ...mealInput, calories: parseInt(mealInput.calories) },
      config
    );

    promisse.catch((error) => {
      alert(error.response.data);
    });

    SetSubmited(false);
  }

  function handleWaterSubmit(e) {
    SetSubmited(true);

    const promisse = api.post(
      "/water",
      { milliliters: parseInt(waterInput) },
      config
    );

    promisse.catch((error) => {
      alert(error.response.data);
    });

    SetSubmited(false);
  }

  const mealForm = (
    <Form onSubmit={handleMealSubmit}>
      <div className="line-1">
        <TextField
          name="name"
          label="Name"
          onChange={handleMealInput}
          value={mealInput.name}
          required
          disabled={submited}
        />
        <TextField
          name="calories"
          label="Calories"
          type={"number"}
          onChange={handleMealInput}
          value={mealInput.calories}
          required
          disabled={submited}
        />
      </div>
      <Button
        color="secondary"
        variant="contained"
        type="submit"
        disabled={submited || !(mealInput.calories && mealInput.name)}
      >
        Create Meal
      </Button>
    </Form>
  );

  const waterForm = (
    <Form onSubmit={handleWaterSubmit}>
      <TextField
        type={"number"}
        name="milliliters"
        label="milliliters"
        onChange={handleWaterInput}
        value={waterInput}
        required
        disabled={submited}
      />
      <Button
        color="secondary"
        variant="contained"
        type="submit"
        disabled={submited || !waterInput}
      >
        Create Water
      </Button>
    </Form>
  );

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Title>Create {type}</Title>
        {type === "meal" ? mealForm : waterForm}
      </Box>
    </Modal>
  );
}
