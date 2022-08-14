import { Form } from "../../pages/InfoPage/style.js";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import { useContext, useState } from "react";
import api from "../../services/api.js";
import UserContext from "../../contexts/UserContext.js";
import { useNavigate } from "react-router-dom";

export default function InfosForm() {
  const [infos, SetInfos] = useState({
    age: "",
    height: "",
    weight: "",
    gender: "",
    activity: "",
    objective: "",
  });
  const [submited, SetSubmited] = useState(false);
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo?.token}`,
    },
  };

  const { age, height, weight, gender, activity, objective } = infos;

  function handleInput(e) {
    const name = e.target.name;
    infos[name] = e.target.value;
    SetInfos({ ...infos });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (height < 0 || weight < 0 || age < 0) {
      alert("preencha os campos corretamente");
      return;
    }

    const keys = Object.keys(infos);
    keys.forEach((key) => {
      if (!isNaN(infos[key])) {
        infos[key] = infos[key] * 1;
        SetInfos({ ...infos });
      }
    });

    SetSubmited(true);

    const promisse = api.post("/user/user-info", { ...infos }, config);

    promisse.then(() => {
      navigate("/");
    });

    promisse.catch((error) => {
      alert(error.response.data);
    });

    SetSubmited(false);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="line-1">
        <TextField
          type={"number"}
          name="age"
          label="Age"
          value={age}
          placeholder="18"
          onChange={handleInput}
          disabled={submited}
          required
        />
        <TextField
          type={"number"}
          name="height"
          label="Height(cm)"
          value={height}
          placeholder="170"
          onChange={handleInput}
          disabled={submited}
          required
        />
      </div>
      <div className="line-2">
        <TextField
          type={"number"}
          name="weight"
          label="Weight(kg)"
          placeholder="65"
          sx={{ maxWidth: 190, width: "100%" }}
          value={weight}
          onChange={handleInput}
          disabled={submited}
          required
        />
        <FormControl sx={{ maxWidth: 190, width: "100%" }}>
          <InputLabel id="gender">Gender</InputLabel>
          <Select
            label="Gender"
            name="gender"
            id="gender"
            value={gender}
            onChange={handleInput}
            disabled={submited}
            required
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="line-3">
        <FormControl sx={{ maxWidth: 190, width: "100%" }}>
          <InputLabel id="activity">Activity</InputLabel>
          <Select
            label="Activity"
            name="activity"
            id="activity"
            value={activity}
            onChange={handleInput}
            disabled={submited}
            required
          >
            <MenuItem value={"sedentary"}>sedentary</MenuItem>
            <MenuItem value={"low"}>low</MenuItem>
            <MenuItem value={"moderate"}>moderate</MenuItem>
            <MenuItem value={"high"}>high</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ maxWidth: 190, width: "100%" }}>
          <InputLabel id="objective">Objective</InputLabel>
          <Select
            label="Objective"
            name="objective"
            id="objective"
            value={objective}
            onChange={handleInput}
            disabled={submited}
            required
          >
            <MenuItem value={"cut"}>cut</MenuItem>
            <MenuItem value={"maintain"}>maintain</MenuItem>
            <MenuItem value={"bulk"}>bulk</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        disabled={!(age && height && weight && gender && activity && objective)}
      >
        Lets go!
      </Button>
    </Form>
  );
}
