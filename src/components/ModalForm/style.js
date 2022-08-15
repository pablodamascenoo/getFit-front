import styled from "styled-components";

export const Title = styled.h3`
  text-align: center;
  font-weight: 400;
  font-size: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  & > .line-1 {
    display: flex;
    gap: 20px;
  }
`;
