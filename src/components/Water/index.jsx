import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "../Meals/style.js";
import { Button } from "@mui/material";
import dayjs from "dayjs";
import ModalForm from "../ModalForm/index.jsx";
import { useState, useContext } from "react";
import UserContext from "../../contexts/UserContext.js";
import api from "../../services/api.js";

export default function Water({ water }) {
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
      const promisse = api.delete(`/water/${id}`, config);

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
                <DeleteIcon onClick={() => deleteItem(cup.id)} />
              </p>
            </div>
          );
        })}
      </div>
    </Box>
  );
}
