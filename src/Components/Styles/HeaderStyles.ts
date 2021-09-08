import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImage from "../assets/logo.png";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(10px);
  z-index: 1000;

  @media screen and (max-width: 1024px) {
    align-items: center;
    justify-content: flex-end;
    padding-right: 1rem;
  }

  @media screen and (max-width: 480px) {
    justify-content: center;
    padding-right: 0;
  }
`;

export const Logo = styled(Link)`
  width: 200px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${LogoImage});
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: center;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const List = styled.ul`
  height: 100%;
  display: flex;
  list-style: none;

  @media screen and (max-width: 480px) {
    width: 70%;
  }
`;

export const Item = styled.li<{ current: boolean }>`
  width: 7rem;
  height: 100%;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#e6bd0a" : "transparent")};
  transition: border-bottom 0.5s ease-in-out, color 0.5s ease-in-out;
  box-sizing: border-box;
  color: ${(props) => (props.current ? "#e6bd0a" : "")};
  .mobileIcon {
    display: none;
  }
  strong {
    display: inline-block;
  }

  @media screen and (max-width: 1024px) {
    width: 6rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
    .mobileIcon {
      display: block;
    }
    strong {
      display: none;
    }
  }
`;

export const SLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.6;
  }
`;
