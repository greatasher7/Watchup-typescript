import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(6, 1fr);
  justify-content: space-between;
`;

const Title = styled.h3`
  grid-column: 1 / 7;
  font-size: 1.2rem;
  margin-left: 0.5vw;
`;

const NoRelated = styled.span`
  margin-top: 4vh;
  color: #ccc;
  font-size: 0.8rem;
  margin-left: 1vw;
`;

const DLink = styled(Link)``;

const Article = styled.article`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
`;

const Poster = styled.img`
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

const Name = styled.h4`
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

const Year = styled.span`
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

const DetailRelated = ({ relatedResult }) => {
  return (
    <Container>
      <Title>Related Videos</Title>
      {relatedResult.length === 0 ? (
        <NoRelated>No Related Videos...</NoRelated>
      ) : (
        relatedResult.map((result, index) => {
          if (index > 5) {
            return false;
          }
          const isMovie = result.title;
          return (
            <DLink
              key={result.id}
              to={
                isMovie
                  ? `/movie-detail/${result.id}`
                  : `/show-detail/${result.id}`
              }
            >
              <Article>
                <Poster
                  src={
                    result.poster_path
                      ? `https://image.tmdb.org/t/p/w300/${result.poster_path}`
                      : require("assets/noPosterSmall.PNG").default
                  }
                />
                <Name>{isMovie ? result.title : result.name}</Name>
                <Year>
                  {result.release_date
                    ? result.release_date.substring(0, 4)
                    : result.first_air_date
                    ? result.first_air_date.substring(0, 4)
                    : "-"}
                </Year>
              </Article>
            </DLink>
          );
        })
      )}
    </Container>
  );
};

DetailRelated.propTypes = {
  relatedResult: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      first_air_date: PropTypes.string,
    })
  ),
};

export default DetailRelated;
