import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "./style.js";
import { Button } from "@mui/material";
import dayjs from "dayjs";
import ModalForm from "../ModalForm/index.jsx";
import { useState } from "react";

export default function Meals({ meals }) {
  const [open, SetOpen] = useState(false);

  function handleClose() {
    SetOpen(false);
  }
  function handleOpen() {
    SetOpen(true);
  }

  return (
    <Box>
      <Button
        onClick={handleOpen}
        color="secondary"
        variant="contained"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderRadius: 0,
          position: "absolute",
          right: 0,
          width: "100%",
        }}
      >
        <p>Meals</p>
        <AddIcon />
      </Button>
      <ModalForm open={open} handleClose={handleClose} type={"meal"} />
      <div className="content">
        {meals?.map((meal, index) => {
          return (
            <div className="meal" key={index}>
              <p>
                {meal.name}
                <span>{dayjs(meal.createdAt).format("HH:MM")}</span>
              </p>
              <p>
                {meal.calories}kcal
                <DeleteIcon />
              </p>
            </div>
          );
        })}
      </div>
    </Box>
  );
}
