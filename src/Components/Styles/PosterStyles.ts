import styled from "styled-components";
import { Link } from "react-router-dom";

export const PLink = styled(Link)``;

export const Container = styled.div`
  font-size: 0.8rem;
  animation: appearPoster 2s ease-in-out;
  position: relative;

  @keyframes appearPoster {
    from {
      opacity: 0;
      top: 30px;
    }
    to {
      opacity: 1;
      top: 0;
    }
  }
`;

export const Image = styled.div`
  height: 230px;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 20px;
  transition: opacity 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 15px #e6bd0a;
  }
  @media screen and (max-width: 1024px) {
    height: 12rem;
    border-radius: 10px;
  }
  @media screen and (max-width: 480px) {
    height: 8rem;
    border-radius: 10px;
  }
`;

export const Rating = styled.span`
  font-size: 0.8rem;
  position: absolute;
  bottom: 10px;
  right: 10px;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;

export const ImageContainer = styled.div`
  margin-bottom: 0.7rem;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.6;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

export const CaptionContainer = styled.div`
  padding-left: 3px;
`;

export const Title = styled.span`
  font-size: 0.8rem;
  height: 1.2rem;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    height: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    height: 1.2rem;
  }
`;

export const Year = styled.span`
  font-size: 0.7rem;
  opacity: 0.5;
  @media screen and (max-width: 1024px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
