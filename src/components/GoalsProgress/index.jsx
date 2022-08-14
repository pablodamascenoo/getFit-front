import { Goals, Image, Line } from "./style.js";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import apple from "../../assets/svg/apple-whole-solid.svg";
import glass from "../../assets/svg/glass-water-solid.svg";

export default function GoalsProgress({ goals, meals, water }) {
  let calories = 0;
  let milliliters = 0;
  meals.forEach((meal) => (calories += meal.calories));
  water.forEach((cup) => (milliliters += cup.milliliters));
  return (
    <Goals>
      <h2>Goals</h2>
      <div className="progress">
        <CircularProgressbarWithChildren
          styles={buildStyles({
            pathColor: "#FFC74E",
          })}
          value={(calories / goals.caloriesGoal) * 100}
        >
          <Image src={apple} alt="apple" />
          <p>{`${calories}/${goals.caloriesGoal}`}</p>
        </CircularProgressbarWithChildren>
        <Line></Line>
        <CircularProgressbarWithChildren
          styles={buildStyles({
            pathColor: "#2BD7D7",
          })}
          value={(milliliters / goals.waterGoal) * 100}
        >
          <Image src={glass} alt="apple" />
          <p>{`${milliliters}/${goals.waterGoal}`}</p>
        </CircularProgressbarWithChildren>
      </div>
    </Goals>
  );
}
