import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 75vh;
  @media screen and (max-width: 480px) {
    height: 60vh;
  }
`;

export const ContainerBg = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  opacity: 0.2;
  z-index: -1;
  overflow: hidden;
`;

export const Video = styled.iframe`
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
`;

export const ContainerInfo = styled.div`
  width: calc(100% - 5vw);
  height: 100%;
  margin: 0 2.5vw;
  padding-top: 19vh;
  border-bottom: 1px solid;
  border-image: linear-gradient(to right, #333, #ccc, #333);
  border-image-slice: 1;
  position: relative;
  animation: appearInfo 2s;
  @keyframes appearInfo {
    from {
      opacity: 0;
      left: -3rem;
    }
    to {
      opacity: 1;
      left: 0;
    }
  }
  @media screen and (max-width: 1024px) {
    padding-top: 13vh;
  }
  @media screen and (max-width: 480px) {
    padding: 0 4vw;
    padding-top: 15vh;
  }
`;

export const TagLine = styled.h1`
  font-size: 2.2rem;
  font-style: italic;
  font-weight: 500;
  color: #aaa;
  margin-bottom: 5vh;
  margin-left: -0.5vw;
  @media screen and (max-width: 480px) {
    line-height: 1.3;
    margin-bottom: 3vh;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2.5vh;
  @media screen and (max-width: 480px) {
    line-height: 1.3;
  }
`;

export const InfoList = styled.ul``;

export const Infos = styled.li`
  margin-bottom: 1.2vh;
  font-size: 0.7rem;
`;

export const Description = styled.p`
  width: 70%;
  max-width: 50vw;
  line-height: 1.5;
  font-weight: lighter;
  font-size: 0.9rem;
  margin-top: 2vh;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const DetailLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 4.5vh;
  background: linear-gradient(
    156deg,
    rgba(245, 239, 88, 1) 0%,
    rgba(60, 137, 228, 1) 100%
  );
  border-radius: 0 0.8rem;
  font-size: 0.9rem;
  margin-top: 4vh;
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 1024px) {
    width: 25vw;
  }
  @media screen and (max-width: 480px) {
    width: 30vw;
  }
`;
