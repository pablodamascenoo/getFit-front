import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "../Meals/style.js";
import { Button } from "@mui/material";
import dayjs from "dayjs";
import ModalForm from "../ModalForm/index.jsx";
import { useState } from "react";

export default function Water({ water }) {
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
        <p>Water</p>
        <AddIcon />
      </Button>
      <ModalForm open={open} handleClose={handleClose} type={"water"} />
      <div className="content">
        {water?.map((cup, index) => {
          return (
            <div className="water" key={index}>
              <p>
                {cup.milliliters}ml{" "}
                <span>{dayjs(cup.createdAt).format("HH:MM")}</span>
              </p>
              <p>
                <DeleteIcon />
              </p>
            </div>
          );
        })}
      </div>
    </Box>
  );
}
