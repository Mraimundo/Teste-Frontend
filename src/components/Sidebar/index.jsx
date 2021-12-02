import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import Button from "../../components/Button";
import InputText from "../../components/InputText";

import iconPlus from "../../assets/images/plus.png";
import closeModal from "../../assets/images/close.png";
import addPhoto from "../../assets/images/camera.png";


import * as S from "./styled";

const Sidebar = () => {

  const [isPokemonDetailsModalOpen, setIsPokemonDetailsModalOpen] = useState(false);

  function handleOpenDetailsModal() {
    setIsPokemonDetailsModalOpen(true);
  }

  function handleCloseDetailsModal() {
    setIsPokemonDetailsModalOpen(false);
  }



  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        <S.SideBarItem>?</S.SideBarItem>
      </S.SideBarList>
      <Button
        icon={iconPlus}
        onClick={() => handleOpenDetailsModal()}
      />

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
          <S.AddPhoto>
            <img src={addPhoto} alt="Adicionar Foto" />
          </S.AddPhoto>
          <S.Container>
            <InputText
              placeholder="Nome"
              label="Nome"
            />
            <button type="submit">
              Criar Pokemon
            </button>
          </S.Container>
        </S.Content>
      </Modal>
    </S.SideBarWrapper>
  );
}

export default Sidebar;
