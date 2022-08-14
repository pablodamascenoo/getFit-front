import styled from "styled-components";

export const Goals = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 15px;
  padding: 15px;
  gap: 15px;

  .progress {
    display: flex;
    width: 90%;
    gap: 50px;
  }

  h2 {
    font-size: 3em;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
  }

  @media (max-width: 380px) {
    p {
      font-size: 0.65rem;
    }
  }
`;

export const Image = styled.img`
  width: 35%;
  filter: invert(42%) sepia(6%) saturate(1991%) hue-rotate(168deg)
    brightness(89%) contrast(92%);
`;

export const Line = styled.div`
  width: 5px;
  height: 100%;
  background-color: #4e677e;
`;
