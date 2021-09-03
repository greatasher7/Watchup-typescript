import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  margin: 2rem 0;
  color: #c4c5ac;
`;

export const SectionCity = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
`;
