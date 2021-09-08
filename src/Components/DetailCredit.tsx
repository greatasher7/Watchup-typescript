import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Title,
  Article,
  ProfileImg,
  Name,
  Character,
} from "./Styles/DetailCreditStyles";

const DetailCredit = ({ castResult }) => {
  return (
    <>
      <Container>
        <Title>Casts</Title>
        {castResult.map((cast, index) => {
          if (index > 13) {
            return false;
          }
          return (
            <Article key={cast.id} index={`cast${index}`}>
              <ProfileImg
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w300/${cast.profile_path}`
                    : require("assets/noCastSmall.PNG").default
                }
              />
              <Name>{cast.name}</Name>
              <Character>{cast.character}</Character>
            </Article>
          );
        })}
      </Container>
    </>
  );
};

DetailCredit.propTypes = {
  castResult: PropTypes.arrayOf(
    PropTypes.shape({
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};

export default DetailCredit;
