import React from "react";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTv,
  faVideo,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { IRouteProps } from "Global/Types";
import { Header, Logo, List, Item, SLink } from "./HeaderStyles";

const Nav = ({ location: { pathname } }: RouteComponentProps<IRouteProps>) => {
  return (
    <Header>
      <Logo to="/" />
      <List>
        <Item current={pathname === "/"}>
          <SLink to="/">
            <strong>Home</strong>
            <FontAwesomeIcon icon={faHome} className="mobileIcon" />
          </SLink>
        </Item>
        <Item current={pathname.includes("/movie")}>
          <SLink to="/movie">
            <strong>Movies</strong>
            <FontAwesomeIcon icon={faVideo} className="mobileIcon" />
          </SLink>
        </Item>
        <Item current={pathname.includes("/show")}>
          <SLink to="/show">
            <strong>TV Show</strong>
            <FontAwesomeIcon icon={faTv} className="mobileIcon" />
          </SLink>
        </Item>
        <Item current={pathname.includes("/search")}>
          <SLink to="/search">
            <strong>Search</strong>
            <FontAwesomeIcon icon={faSearch} className="mobileIcon" />
          </SLink>
        </Item>
      </List>
    </Header>
  );
};

export default withRouter(Nav);
