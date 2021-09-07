import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #333;
`;

export const Backdrop = styled.div<{ bgImg: string }>`
  position: fixed;
  top: 0;
  z-index: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.bgImg});
  background-position: center center;
  background-size: cover;
  filter: blur(5px);
  animation: appearDetailBg 3s ease-in-out;
  @keyframes appearDetailBg {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ContentCover = styled.div`
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Section = styled.section`
  position: relative;
  width: 75%;
  margin: 5vh auto;
  padding-bottom: 5vh;
  border-bottom: 1px solid;
  border-image: linear-gradient(to right, #333, #ccc, #333);
  border-image-slice: 1;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  animation: appearDetail 2s ease-in-out;
  @keyframes appearDetail {
    from {
      opacity: 0;
      top: 7vh;
    }
    to {
      opacity: 1;
      top: 0;
    }
  }
  &:first-child {
    margin-top: 20vh;
  }
  &:last-child {
    margin-bottom: 15vh;
  }
  &.tabletDesc {
    display: none;
  }
  &.mobileDesc {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    &.tabletDesc {
      display: block;
    }
    &:first-child {
      margin-top: 15vh;
    }
  }
  @media screen and (max-width: 480px) {
    &.mobileDesc {
      display: block;
    }
    &.tabletDesc {
      display: none;
    }
    width: 90%;
    margin: 4vh auto;
    padding-bottom: 3vh;
  }
`;

export const Cover = styled.img`
  display: block;
  width: 25%;
  min-width: 18vw;
  border-radius: 15px;
  box-shadow: 0px 0px 20px #000;
  @media screen and (max-width: 480px) {
    width: 70%;
  }
`;

export const Data = styled.div`
  width: 75%;
  margin-left: 4vw;
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 4vh;
  @media screen and (max-width: 1024px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 2vh;
  }
`;

export const Info = styled.span`
  color: #ccc;
  &.block {
    display: block;
    margin-top: 1.5vh;
  }
  @media screen and (max-width: 480px) {
    display: block;
    margin-bottom: 0.5rem;
    &.block {
      margin-top: 0;
    }
  }
`;

export const Divider = styled.span`
  margin: 0 0.7vw;
  font-weight: bold;
`;

export const InfoContainer = styled.div`
  margin-bottom: 3vh;
  font-size: 0.8rem;
  @media screen and (max-width: 480px) {
    ${Divider} {
      display: none;
    }
  }
`;

export const Description = styled.p`
  line-height: 1.5;
  opacity: 0.8;
  font-size: 0.9rem;
  @media screen and (max-width: 1024px) {
    &.pcDesc {
      display: none;
    }
  }
`;
