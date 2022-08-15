import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-top: 30px;
  height: 300px;

  .content {
    margin-top: 39px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .meal,
  .water {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-weight: 700;
    padding: 10px 15px;
    border-bottom: 2px solid #4e677e;
    max-height: 67px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .meal > p,
  .water > p {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .meal > p:last-of-type {
    font-weight: 400;
    font-size: 0.85rem;
  }

  .water > p:last-of-type {
    display: flex;
    justify-content: end;
  }
`;
