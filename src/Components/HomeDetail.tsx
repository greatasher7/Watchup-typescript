import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { youtubeApi } from "../Api";
import {
  Container,
  ContainerBg,
  Video,
  ContainerInfo,
  TagLine,
  Title,
  InfoList,
  Infos,
  Description,
  DetailLink,
} from "./Styles/HomeDetailStyles";

const HomeDetail = ({ movie }) => {
  const [id, setId] = useState();
  const [error, setError] = useState(false);

  const getYoutubeId = async () => {
    try {
      const {
        data: { items: trailerItem },
      } = await youtubeApi.searchForId(`${movie.title} Official Trailer`);
      const {
        id: { videoId: trailerId },
      } = trailerItem[0];
      setId(trailerId);
    } catch (e) {
      setError(e);
      console.log(e);
    }
  };
  useEffect(() => {
    getYoutubeId();
  }, []);

  return (
    <Container>
      <ContainerBg>
        <Video
          title="sample"
          id="player"
          type="text/html"
          src={
            error
              ? "https://www.youtube.com/embed/66Ne5dVDfLM?autoplay=1&mute=1&loop=1&start=1"
              : `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}`
          }
        />
      </ContainerBg>
      <ContainerInfo>
        <TagLine>
          {movie.tagline ? `"${movie.tagline}"` : `"Movie is always right"`}
        </TagLine>
        <Title>{movie.title}</Title>
        <InfoList>
          <Infos>
            {movie.genres.map((genre, index) =>
              index === movie.genres.length - 1
                ? genre.name
                : genre.name + " · "
            )}
          </Infos>
          <Infos>
            {movie.release_date.slice(0, 4)} · {movie.runtime} min
          </Infos>
          <Infos>⭐️ {movie.vote_average}</Infos>
          <Infos>
            <Description>{movie.overview}</Description>
          </Infos>
        </InfoList>
        <DetailLink to={`/movie-detail/${movie.id}`}>Movie Detail</DetailLink>
      </ContainerInfo>
    </Container>
  );
};

HomeDetail.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tagline: PropTypes.string,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ).isRequired,
    release_date: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }),
};

export default HomeDetail;
