import { Container } from "../RegisterPage/style.js";
import UserContext from "../../contexts/UserContext.js";
import { useContext } from "react";
import { Text } from "./style.js";
import InfosForm from "../../components/InfosForm/index.jsx";

export default function InfoPage() {
  const { userInfo } = useContext(UserContext);

  return (
    <Container>
      <Text>{`Hi, ${userInfo.name}, now we need some infos to create your calories goal`}</Text>
      <InfosForm />
    </Container>
  );
}
