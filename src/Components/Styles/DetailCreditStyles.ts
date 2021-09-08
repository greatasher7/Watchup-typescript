import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 3vh;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const Title = styled.h3`
  grid-column: 1 / 8;
  font-size: 1.2rem;
  margin-left: 0.5vw;
`;

export const Article = styled.div`
  font-size: 0.6rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 480px) {
    display: ${(props) =>
      Number(props.index.replace("cast", "")) > 4 ? "none" : "block"};
  }
`;

export const ProfileImg = styled.img`
  display: block;
  width: 80%;
  box-shadow: 0px 0px 10px #777;
  border-radius: 20%;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    height: 6rem;
  }
  @media screen and (max-width: 480px) {
    height: 6rem;
  }
`;

export const Name = styled.h4`
  text-align: center;
  width: 100%;
  line-height: 1.2;
  font-size: 0.7rem;
  margin-top: 0.9vh;
  @media screen and (max-width: 1024px) {
    font-size: 0.6rem;
  }
`;

export const Character = styled.span`
  margin-top: 0.4vh;
  color: #aaa;
  font-size: 0.7rem;
  line-height: 1.1;
  text-align: center;
  display: block;
  @media screen and (max-width: 1024px) {
    font-size: 0.6rem;
  }
`;
