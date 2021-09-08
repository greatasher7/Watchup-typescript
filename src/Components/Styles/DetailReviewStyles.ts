import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  margin-left: 0.5vw;
`;

export const NoReview = styled.div`
  margin-top: 4vh;
  color: #ccc;
  font-size: 0.8rem;
  margin-left: 1vw;
`;

export const Article = styled.article`
  display: flex;
  align-items: flex-start;
  margin-top: 3.5vh;
`;

export const ProfileImg = styled.span`
  display: block;
  width: 3rem;
  height: 3rem;
  background-color: #333;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  border: 3px solid #fff;
`;

export const ContentBox = styled.div`
  width: 80%;
  margin-left: 1rem;
`;

export const Name = styled.h4`
  font-size: 0.8rem;
  margin-bottom: 1vh;
`;

export const Contents = styled.p`
  font-size: 0.7rem;
  line-height: 1.5;
  color: #ccc;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1.5vh;
  border-radius: 20px;
  &.tabletReview {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    &.tabletReview {
      display: block;
    }
    &.pcReview {
      display: none;
    }
    border-radius: 10px;
  }
`;

export const Date = styled.span`
  display: block;
  font-size: 0.7rem;
  color: #999;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
`;
