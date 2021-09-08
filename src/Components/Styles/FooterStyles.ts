import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 17vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    height: 300px;
  }
  @media screen and (max-width: 480px) {
    height: 400px;
  }
`;

export const ContainerCenter = styled.div`
  width: 65%;
  display: grid;
  grid-template-columns: 0.5fr 2.5fr 1fr 1fr;
  @media screen and (max-width: 1024px) {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 0.5fr 2fr;
    padding: 20px 0;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 0.8fr 1.5fr 1.5fr 1.5fr;
    padding: 20px 0;
  }
`;

export const FooterCont = styled.div`
  padding: 0 2vw;
  @media screen and (max-width: 1024px) {
    &.logo {
      grid-column: 1/3;
    }
    &.copy {
      grid-column: 1/3;
    }
    &.follow {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    &.app {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 480px) {
    &.logo {
      grid-column: 1/2;
    }
    &.copy {
      grid-column: 1/2;
    }
    &.follow {
    }
    &.app {
    }
  }
`;

export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

export const LogoImage = styled.img`
  width: 7vw;
  @media screen and (max-width: 1024px) {
    width: 15vw;
  }
  @media screen and (max-width: 480px) {
    width: 25vw;
  }
`;

export const Copyright = styled.p`
  height: 100%;
  font-size: 0.6rem;
  line-height: 1.3;
  color: #999;
  letter-spacing: 0.05rem;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    padding: 0 5rem;
    text-align: center;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const FooterTitle = styled.h4`
  font-size: 1rem;
  color: #ccc;
  font-weight: 500;
  padding-top: 3vh;
  @media screen and (max-width: 1024px) {
    text-align: center;
    padding-top: 0;
    margin-bottom: 2vh;
  }
`;

export const FollowUsList = styled.ul`
  display: flex;
  margin-top: 1.5vh;
  margin-left: -5px;
  @media screen and (max-width: 1024px) {
    justify-content: center;
    margin-top: 0;
  }
`;

export const FollowUs = styled.li`
  &:not(:last-child) {
    margin-right: 0.7vw;
  }
`;

export const LinkToFollow = styled.a`
  width: 4vh;
  height: 4vh;
  background-color: #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  &:hover {
    transition: font-size 0.3s ease-in-out, background-color 0.3s ease-in-out;
    font-size: 1.2rem;
    background-color: #e6bd0a;
  }
`;

export const AppDownloadList = styled.ul`
  margin-top: 1.5vh;
  margin-left: -5px;
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    margin-top: 0;
  }
`;

export const AppDownload = styled.li`
  &:first-child {
    margin-bottom: 0.5vh;
  }
  @media screen and (max-width: 1024px) {
    &:first-child {
      margin-right: 1vw;
    }
  }
`;

export const LinkToApp = styled.a`
  display: flex;
  align-items: center;
  padding-left: 1vw;
  font-size: 0.9rem;
  width: 9vw;
  height: 3.5vh;
  background-color: rgba(50, 50, 50, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #e6bd0a;
  }
  @media screen and (max-width: 1024px) {
    width: 15vw;
  }
  @media screen and (max-width: 480px) {
    width: 30vw;
    padding-left: 3vw;
  }
`;

export const AppString = styled.span`
  margin-left: 0.7vw;
  font-size: 0.6rem;
  @media screen and (max-width: 480px) {
    margin-left: 2vw;
  }
`;
