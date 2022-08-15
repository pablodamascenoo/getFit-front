import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #ffc74e;

  & > p {
    font-weight: 700;
  }
`;
