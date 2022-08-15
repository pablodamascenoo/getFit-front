import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext.js";
import api from "../../services/api.js";
import GoalsProgress from "../../components/GoalsProgress/index.jsx";
import Meals from "../../components/Meals/index.jsx";
import Water from "../../components/Water/index.jsx";

import { Container, TitleBox } from "../RegisterPage/style.js";
import { FoodDiv } from "./style.js";
import HomeHeader from "../../components/Header/index.jsx";

export default function HomePage() {
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);
  const [goal, SetGoal] = useState({});
  const [meals, SetMeals] = useState([]);
  const [water, SetWater] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo?.token}`,
    },
  };

  function setInfos(data) {
    SetGoal(data.goal[0]);
    SetMeals(data.meal);
    SetWater(data.water);
  }

  useEffect(() => {
    const promisse = api.get("/user", config);

    promisse.then((obj) => {
      const { data } = obj;
      if (data.goal.length === 0) {
        navigate("/info");
        return;
      }
      setInfos(data);
    });

    promisse.catch((error) => {
      alert(error.response.data);
      if (error.response.status === 401) {
        navigate("/auth/sign-in");
        return;
      }
    });
  }, []);

  return (
    <>
      <HomeHeader />
      <Container>
        <TitleBox>
          <h2>Welcome back, {userInfo?.name}!</h2>
        </TitleBox>
        <GoalsProgress goals={goal} meals={meals} water={water} />
        <FoodDiv>
          <Meals meals={meals} />
          <Water water={water} />
        </FoodDiv>
      </Container>
    </>
  );
}
