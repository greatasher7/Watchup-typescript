import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(6, 1fr);
  justify-content: space-between;
`;

export const Title = styled.h3`
  grid-column: 1 / 7;
  font-size: 1.2rem;
  margin-left: 0.5vw;
`;

export const NoRelated = styled.span`
  margin-top: 4vh;
  color: #ccc;
  font-size: 0.8rem;
  margin-left: 1vw;
`;

export const DLink = styled(Link)``;

export const Article = styled.article`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
`;

export const Poster = styled.img`
  display: block;
  width: 85%;
  height: 16rem;
  border-radius: 20px;
  &:hover {
    box-shadow: 0px 0px 15px #e6bd0a;
  }
  @media screen and (max-width: 1024px) {
    border-radius: 10px;
    height: 8rem;
  }
  @media screen and (max-width: 480px) {
    border-radius: 5px;
    height: 5.5rem;
  }
`;

export const Name = styled.h4`
  width: 100%;
  line-height: 1.2;
  text-align: center;
  font-size: 0.7rem;
  margin-top: 1.3vh;
  @media screen and (max-width: 1024px) {
    font-size: 0.6rem;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Year = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 0.6rem;
  color: #aaa;
  margin-top: 0.8vh;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
