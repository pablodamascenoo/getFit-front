import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "./style.js";
import { Button } from "@mui/material";
import dayjs from "dayjs";
import ModalForm from "../ModalForm/index.jsx";
import { useContext, useState } from "react";
import api from "../../services/api.js";
import UserContext from "../../contexts/UserContext.js";

export default function Meals({ meals }) {
  const [open, SetOpen] = useState(false);
  const { userInfo } = useContext(UserContext);

  function handleClose() {
    SetOpen(false);
  }
  function handleOpen() {
    SetOpen(true);
  }

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo?.token}`,
    },
  };

  function deleteItem(id) {
    const response = confirm("deseja excluir esse item?");

    if (response) {
      const promisse = api.delete(`/meals/${id}`, config);

      promisse.then(() => {
        window.location.reload();
      });

      promisse.catch((error) => {
        alert(error.response.data);
      });
    }
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
                <DeleteIcon onClick={() => deleteItem(meal.id)} />
              </p>
            </div>
          );
        })}
      </div>
    </Box>
  );
}
