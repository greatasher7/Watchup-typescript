import React from "react";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Global/Fontawesome";
import { IRouteProps } from "../Global/Types";
import { Header, Logo, List, Item, SLink } from "./Styles/HeaderStyles";

const Nav = ({ location: { pathname } }: RouteComponentProps<IRouteProps>) => {
  return (
    <Header>
      <Logo to="/" />
      <List>
        <Item current={pathname === "/"}>
          <SLink to="/">
            <strong>Home</strong>
            <FontAwesomeIcon icon="home" className="mobileIcon" />
          </SLink>
        </Item>
        <Item current={pathname.includes("/movie")}>
          <SLink to="/movie">
            <strong>Movies</strong>
            <FontAwesomeIcon icon="video" className="mobileIcon" />
          </SLink>
        </Item>
        <Item current={pathname.includes("/show")}>
          <SLink to="/show">
            <strong>TV Show</strong>
            <FontAwesomeIcon icon="tv" className="mobileIcon" />
          </SLink>
        </Item>
        <Item current={pathname.includes("/search")}>
          <SLink to="/search">
            <strong>Search</strong>
            <FontAwesomeIcon icon="search" className="mobileIcon" />
          </SLink>
        </Item>
      </List>
    </Header>
  );
};

export default withRouter(Nav);
