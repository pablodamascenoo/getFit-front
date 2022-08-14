import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: 0;
  animation: fade-in 1.5s forwards;
  animation-delay: 1.5s;
  margin: 0 20px;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  & > div {
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }
`;

export const Text = styled.h3`
  text-align: center;
  margin-bottom: 50px;
  font-size: 1.9rem;
  animation: fade-in 3.5s forwards;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
