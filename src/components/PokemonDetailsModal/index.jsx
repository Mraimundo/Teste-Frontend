import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { api } from "../../services/api";
import DropdownPage from "../Dropdown";


import * as S from "./styled";

const PokemonDetailsModal = () => {
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
    <>
      <Modal
        isOpen={isPokemonDetailsModalOpen}
        onRequestClose={() => handleCloseDetailsModal()}
      >
        <h2>Carregar os pokemons</h2>
      </Modal>

      < DropdownPage />
    </>
  );
}

export default PokemonDetailsModal;
