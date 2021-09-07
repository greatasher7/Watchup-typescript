import React from "react";
import { RouteComponentProps } from "react-router";
import Helmet from "react-helmet";
import { IRouteProps } from "../../Global/Types";
import Loader from "Components/Loader";
import useDetail from "./useDetail";
import DetailIframe from "Components/DetailIframe";
import DetailCredit from "Components/DetailCredit";
import DetailReview from "Components/DetailReview";
import DetailRelated from "Components/DetailRelated";
import {
  Container,
  Backdrop,
  ContentCover,
  Section,
  Cover,
  Data,
  Title,
  Info,
  Divider,
  InfoContainer,
  Description,
} from "./DetailStyles";

function Detail(props: RouteComponentProps<IRouteProps>): JSX.Element {
  const [loading, detailResult, castResult, reviewResult, relatedResult] =
    useDetail(props);

  return loading ? (
    <>
      <Helmet>
        <title>Loading...</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <>
      <Helmet>
        <title>
          {detailResult.title ? detailResult.title : detailResult.name} |
          watchup
        </title>
      </Helmet>
      <Container>
        <Backdrop
          bgImg={`https://image.tmdb.org/t/p/original/${detailResult.backdrop_path}`}
        ></Backdrop>
        <ContentCover>
          <Section>
            <Cover
              src={
                detailResult.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${detailResult.poster_path}`
                  : require("assets/noPosterSmall.PNG").default
              }
            ></Cover>
            <Data>
              <Title>
                {detailResult.title ? detailResult.title : detailResult.name}
              </Title>
              <InfoContainer>
                <Info>
                  {detailResult.release_date
                    ? detailResult.release_date.substring(0, 4)
                    : detailResult.first_air_date
                    ? detailResult.first_air_date.substring(0, 4)
                    : "-"}
                </Info>
                <Divider>·</Divider>
                <Info>
                  {detailResult.runtime
                    ? `${detailResult.runtime} min`
                    : detailResult.seasons
                    ? `${detailResult.seasons.length} seasons & ${
                        detailResult.seasons[detailResult.seasons.length - 1]
                          .episode_count
                      } episodes`
                    : ""}
                </Info>
                <Divider>·</Divider>
                <Info>
                  {detailResult.production_countries.map((country, index) =>
                    index === detailResult.production_countries.length - 1
                      ? country.name
                      : country.name + " & "
                  )}
                </Info>
                <Info className="block">
                  {detailResult.genres.map((genre, index) =>
                    index === detailResult.genres.length - 1
                      ? genre.name
                      : genre.name + " · "
                  )}
                </Info>
              </InfoContainer>
              <Description className="pcDesc">
                {detailResult.overview}
              </Description>
            </Data>
          </Section>
          <Section className="tabletDesc">
            <Description>
              &quot;
              {detailResult.overview.length < 300
                ? detailResult.overview
                : `${detailResult.overview.substring(0, 300)}...`}
              &quot;
            </Description>
          </Section>
          <Section className="mobileDesc">
            <Description>
              &quot;
              {detailResult.overview.length < 200
                ? detailResult.overview
                : `${detailResult.overview.substring(0, 200)}...`}
              &quot;
            </Description>
          </Section>
          <Section>
            <DetailIframe
              key={props.match.params.id + "Iframe"}
              title={
                detailResult.title ? detailResult.title : detailResult.name
              }
            />
          </Section>
          <Section>
            <DetailCredit
              key={props.match.params.id + "Credit"}
              castResult={castResult}
            />
          </Section>
          <Section>
            <DetailReview
              key={props.match.params.id + "Review"}
              reviewResult={reviewResult}
            />
          </Section>
          <Section>
            <DetailRelated
              key={props.match.params.id + "Related"}
              relatedResult={relatedResult}
            />
          </Section>
        </ContentCover>
      </Container>
    </>
  );
}

export default Detail;
