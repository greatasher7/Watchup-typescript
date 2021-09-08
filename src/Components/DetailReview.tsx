import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Title,
  NoReview,
  Article,
  ProfileImg,
  ContentBox,
  Name,
  Contents,
  Date,
} from "./Styles/DetailReviewStyles";

const DetailReview = ({ reviewResult }) => {
  return (
    <Container>
      <Title>Reviews</Title>
      {reviewResult.length < 1 ? (
        <NoReview>No Reviews...</NoReview>
      ) : (
        reviewResult.map((review) => {
          return (
            <Article key={review.id}>
              <ProfileImg
                img={
                  review.author_details.avatar_path
                    ? `https://image.tmdb.org/t/p/w300/${review.author_details.avatar_path}`
                    : ""
                }
              />
              <ContentBox>
                <Name>{review.author}</Name>
                <Contents className="pcReview">{`${review.content.substring(
                  0,
                  300
                )}...`}</Contents>
                <Contents className="tabletReview">{`${review.content.substring(
                  0,
                  100
                )}...`}</Contents>
                <Date>{review.updated_at.substring(0, 10)}</Date>
              </ContentBox>
            </Article>
          );
        })
      )}
    </Container>
  );
};

DetailReview.propTypes = {
  reviewResult: PropTypes.arrayOf(
    PropTypes.shape({
      author_details: PropTypes.shape({
        avatar_path: PropTypes.string,
      }),
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
    })
  ),
};

export default DetailReview;
