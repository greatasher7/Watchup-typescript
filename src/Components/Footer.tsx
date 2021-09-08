import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Global/Fontawesome";
import {
  Container,
  ContainerCenter,
  FooterCont,
  LogoContainer,
  LogoImage,
  Copyright,
  FooterTitle,
  FollowUsList,
  FollowUs,
  LinkToFollow,
  AppDownloadList,
  AppDownload,
  LinkToApp,
  AppString,
} from "./Styles/FooterStyles";

const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
  e.preventDefault();
};

const Footer = (): JSX.Element => {
  return (
    <>
      <Container>
        <ContainerCenter>
          <FooterCont className="logo">
            <LogoContainer>
              <LogoImage src={require("assets/logo.png").default} />
            </LogoContainer>
          </FooterCont>
          <FooterCont className="copy">
            <Copyright>
              © 2021 WATCHUP. All Rights Reserved. All videos and shows on this
              platform are trademarks of, and all related images and content are
              the property of, WATCHUP Inc.
            </Copyright>
          </FooterCont>
          <FooterCont className="follow">
            <FooterTitle>Follow Us</FooterTitle>
            <FollowUsList>
              <FollowUs>
                <LinkToFollow href="" onClick={handleClick}>
                  <FontAwesomeIcon icon="facebook" />
                </LinkToFollow>
              </FollowUs>
              <FollowUs>
                <LinkToFollow href="" onClick={handleClick}>
                  <FontAwesomeIcon icon="instagram" />
                </LinkToFollow>
              </FollowUs>
              <FollowUs>
                <LinkToFollow href="" onClick={handleClick}>
                  <FontAwesomeIcon icon="twitter" />
                </LinkToFollow>
              </FollowUs>
              <FollowUs>
                <LinkToFollow href="" onClick={handleClick}>
                  <FontAwesomeIcon icon="github" />
                </LinkToFollow>
              </FollowUs>
            </FollowUsList>
          </FooterCont>
          <FooterCont className="app">
            <FooterTitle>Get App</FooterTitle>
            <AppDownloadList>
              <AppDownload>
                <LinkToApp href="" onClick={handleClick}>
                  <FontAwesomeIcon icon="app-store" />
                  <AppString>App Store</AppString>
                </LinkToApp>
              </AppDownload>
              <AppDownload>
                <LinkToApp href="" onClick={handleClick}>
                  <FontAwesomeIcon icon="google-play" />
                  <AppString>Google Play</AppString>
                </LinkToApp>
              </AppDownload>
            </AppDownloadList>
          </FooterCont>
        </ContainerCenter>
      </Container>
    </>
  );
};

export default Footer;
