import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3vw;
  justify-content: space-between;
`;

export const Article = styled.article``;

export const VideoTitle = styled.h4`
  margin-left: 0.5vw;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0;
  font-size: 1rem;
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    margin-bottom: 0;
    margin-left: 0.7vw;
  }
`;

export const Video = styled.iframe`
  width: 100%;
  height: 15vw;
  border-radius: 15px;
`;
