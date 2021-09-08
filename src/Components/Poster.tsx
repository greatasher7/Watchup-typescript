import React from "react";
import PropTypes from "prop-types";
import noPosterSmall from "../assets/noCastSmall.PNG";
import {
  PLink,
  Container,
  Image,
  Rating,
  ImageContainer,
  CaptionContainer,
  Title,
  Year,
} from "./Styles/PosterStyles";

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <PLink to={isMovie ? `/movie-detail/${id}` : `/show-detail/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300/${imageUrl}`
              : noPosterSmall
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>{" "}
          {rating}
        </Rating>
      </ImageContainer>
      <CaptionContainer>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </CaptionContainer>
    </Container>
  </PLink>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
  isMovie: PropTypes.bool.isRequired,
};

export default Poster;
