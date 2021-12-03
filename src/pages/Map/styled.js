import styled from "styled-components";

import img from "../../assets/images/pageBackground.png";

export const MapWrapper = styled.div`
  position: relative;
  background-image: url(${img});
  background-color: #5dae12;
  background-size: cover;
  height: 100vh;
  
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-100px);
  img {
    width: 100%;
    max-width: 64px;
    height: 59px;
  }
`;

export const Character = styled.div`
  img {
    width: 100%;
    max-width: 64px;
    height: 64px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  position: relative;
  height: 96%;
  margin-top: 156px;
  background: #F7F9FC;
  border-radius: 24px 24px 5px 5px;
  padding-top: 90px;

  @media screen and (min-width: 718px) and (max-width: 995px){
    height: 100%;
   }

`;

export const AvatarPokemon = styled.div`
  position: absolute;
  width: 147px;
  height: 147px;
  top: -70px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);
  background: #F7F9FC;
  border: 4px solid #00D68F;
  border-radius: 50%;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #2E3A59;
  }
`;

export const PokemonInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 18px;

  @media screen and (min-width: 718px) and (max-width: 995px){
    margin-top: 10px;
   }
`;

export const Hp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #C5CEE0;
  padding-right: 32px;
  p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #2E3A59;
    margin-bottom: 8px;
  }
  span {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;

    color: #2E3A59;
  }
`;

export const Altura = styled.div`
  border-right: 2px solid #C5CEE0;
  padding-right: 32px;
  p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #2E3A59;
    margin-bottom: 8px;
  }
  span {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;

    color: #2E3A59;
  }
`;

export const Peso = styled.div`
  p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #2E3A59;
    margin-bottom: 8px;
  }
  span {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;

    color: #2E3A59;
  }
`;

export const TypesPokemons = styled.h2`
  margin-top: 18px;
  text-transform: uppercase;

  @media screen and (min-width: 718px) and (max-width: 995px){
    margin-top: 10px;
   }
`;

export const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
  @media screen and (min-width: 718px) and (max-width: 995px){
    margin-top: 10px;
   }
  > button {
    width: 99px;
    height: 32px;
    border: none;
    background:  #67AF32;
    border-radius: 42px;
    margin-right: 11px;

    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  button:nth-of-type(2) {
    background: #924990;
  }
`;

export const SkillsPokemons = styled.h2`
  margin-top: 18px;
  text-transform: uppercase;

  @media screen and (min-width: 718px) and (max-width: 995px){
    margin-top: 10px;
   }
`;
export const SkillsGroup = styled.div`
  margin-top: 12px;
  display: flex;

  @media screen and (min-width: 718px) and (max-width: 995px){
    margin-top: 5px;
   }

  p {
    padding-right: 8px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #2E3A59;
    text-transform: uppercase;
  }
`;
export const Pokeball = styled.div`
`;


