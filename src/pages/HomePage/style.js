import styled from "styled-components";

export const FoodDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  justify-content: center;

  & > div {
    width: 100%;
  }

  & > div:first-child {
    border-right: 2px solid #4e677e;
  }
`;
