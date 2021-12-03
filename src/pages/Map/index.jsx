import React, { useState } from "react";
import Modal from "react-modal";
import { api } from "../../services/api";

import Sidebar from "../../components/Sidebar";

import imgAshFront from "../../assets/images/ashFront.png";
import searchTooltip from "../../assets/images/searchTooltip.png";
import closeModal from "../../assets/images/close.png";

import * as S from "./styled";

const MapPage = () => {
  const [id, setId] = useState(1)
  const [pokemons, setPokemons] = useState(null);
  const [showTooltip, setShowTootip] = useState(false);
  const [isPokemonDetailsModalOpen, setIsPokemonDetailsModalOpen] = useState(false);

  function randomPokemons(min, max) {
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

  async function handleOpenDetailsModal() {
    setIsPokemonDetailsModalOpen(true);

    const pokemonId = randomPokemons(1, 807)
    setId(pokemonId)

    const response = await api.get(`${id}`);
    setPokemons(response.data)
  }

  function handleCloseDetailsModal() {
    setIsPokemonDetailsModalOpen(false);
  }

  return (
    <S.MapWrapper className="map">
      <Sidebar />
      <S.Container>
        {showTooltip && <S.Tooltip ><img src={searchTooltip} alt="Pesquisar Pokemon" /></S.Tooltip>}
        <S.Character>
          <img
            onClick={() => handleOpenDetailsModal()}
            onMouseEnter={() => setShowTootip(true)}
            onMouseLeave={() => setShowTootip(false)}
            src={imgAshFront} alt="Personagem"
          />
        </S.Character>
        {
          pokemons && <Modal
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
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`} alt="Avatar Pokemon" />
              </S.AvatarPokemon>
              <S.InfoContent key={`key-pokemons-${pokemons.id}`}>
                <h2>{pokemons.name}</h2>
                <S.PokemonInfo>
                  <S.Hp>
                    <p>hp</p>
                    <span>45/45</span>
                  </S.Hp>
                  <S.Altura>
                    <p>altura</p>
                    <span>{pokemons.height} m</span>
                  </S.Altura>
                  <S.Peso>
                    <p>peso</p>
                    <span>{pokemons.weight} kg</span>
                  </S.Peso>
                </S.PokemonInfo>
                <S.TypesPokemons>Tipo</S.TypesPokemons>
                <S.BtnGroup>
                  {pokemons.types.map(type => <button type="button">{type.type.name}</button>)}
                </S.BtnGroup>
                <S.SkillsPokemons>Habilidades</S.SkillsPokemons>
                <S.SkillsGroup>
                  {pokemons.abilities.map(ability => <p>{ability.ability.name}</p>)}
                </S.SkillsGroup>
              </S.InfoContent>
            </S.Content>
          </Modal>
        }
      </S.Container>
    </S.MapWrapper>
  );
}
export default MapPage;
