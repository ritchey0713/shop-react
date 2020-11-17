import React from "react";
import { ReactReduxContext } from "react-redux";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
