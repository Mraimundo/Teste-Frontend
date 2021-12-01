import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { api } from "../../services/api";


import imgAshFront from "../../assets/images/ashFront.png";
import searchTooltip from "../../assets/images/searchTooltip.png";
import closeModal from "../../assets/images/close.png";
import pokeball from "../../assets/images/pokeball.png";

import Sidebar from "../../components/Sidebar";

import * as S from "./styled";

const MapPage = () => {

  const [showTooltip, setShowTootip] = useState(false);
  const [isPokemonDetailsModalOpen, setIsPokemonDetailsModalOpen] = useState(false);

  useEffect(() => {
    api.get('ability/1')
      .then(response => console.log(response.data))
  }, []);


  function handleOpenDetailsModal() {
    setIsPokemonDetailsModalOpen(true);
  }

  function handleCloseDetailsModal() {
    setIsPokemonDetailsModalOpen(false);
  }

  return (
    <S.MapWrapper className="map">
      <Sidebar />
      <S.Container>
        {
          showTooltip && <S.Tooltip ><img src={searchTooltip} alt="Pesquisar Pokemon" /></S.Tooltip>
        }
        <S.Character>
          <img
            onClick={() => handleOpenDetailsModal()}
            onMouseEnter={() => setShowTootip(true)}
            onMouseLeave={() => setShowTootip(false)}
            src={imgAshFront} alt="Personagem"
          />
        </S.Character>
        <Modal
          isOpen={isPokemonDetailsModalOpen}
          onRequestClose={() => handleCloseDetailsModal()}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <button
            type="button"
            onClick={() => handleCloseDetailsModal()}
            className="react-modal-close"
          >
            <img src={closeModal} alt="Fechar Modal" />
          </button>
          <S.Content>
            <S.AvatarPokemon>

            </S.AvatarPokemon>
            <S.InfoContent>
              <h2>BULBASAUR</h2>
              <S.PokemonInfo>
                <S.Hp>
                  <p>hp</p>
                  <span>45/45</span>
                </S.Hp>
                <S.Altura>
                  <p>altura</p>
                  <span>0.7 m</span>
                </S.Altura>
                <S.Peso>
                  <p>peso</p>
                  <span>6.9 kg</span>
                </S.Peso>
              </S.PokemonInfo>
              <S.TypesPokemons>Tipo</S.TypesPokemons>
              <S.BtnGroup>
                <button type="button">planta</button>
                <button type="button">veneno</button>
              </S.BtnGroup>
              <S.SkillsPokemons>Habilidades</S.SkillsPokemons>
              <S.SkillsGroup>
                <p>Overgrow,</p>
                <p>Clorofila</p>
              </S.SkillsGroup>
            </S.InfoContent>
          </S.Content>
        </Modal>
      </S.Container>
    </S.MapWrapper>
  );
}
export default MapPage;
