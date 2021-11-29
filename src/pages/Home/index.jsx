import React from "react";
import { Link } from "react-router-dom"

import {
  Container,
  HomeWrapper,
  Content,
  Button
} from "./styled";

import pokemonLogo from "../../assets/images/pokemonLogo.png"

const HomePage = () => {
  return (
    <Container>
      <HomeWrapper>
        <Content>
          <img src={pokemonLogo} alt="Pokemon Logo" />
          <Button>
            <Link className="link" to="/map">
              START
            </Link>
          </Button>
        </Content>
      </HomeWrapper>
    </Container>
  );
}

export default HomePage;
