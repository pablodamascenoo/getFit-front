import { Header } from "./style.js";
import MenuButton from "../MenuButton/index.jsx";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.js";

export default function HomeHeader() {
  const { userInfo } = useContext(UserContext);

  return (
    <Header>
      <p>Hi, {userInfo?.name}</p>
      <MenuButton />
    </Header>
  );
}
