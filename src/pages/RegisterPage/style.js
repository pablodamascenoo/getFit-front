import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 50px;
  }
  img {
    width: 60px;
  }
`;

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
