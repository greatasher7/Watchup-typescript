import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Title,
  NoRelated,
  DLink,
  Article,
  Poster,
  Name,
  Year,
} from "./Styles/DetailRelatedStyles";

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
