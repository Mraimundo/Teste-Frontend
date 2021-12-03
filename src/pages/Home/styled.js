import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, #43E97B 0%, #38F9D7 100%);
`;

export const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Content = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    max-width: 270px;
    height: 99px;
  }
`;

export const Button = styled.button`
    margin-top: 25px;
    width: 124px;
    height: 56px;
    display: flex;
    justify-content: center;
    border: none;
    border-radius: 42px;
    align-items: center;
    background:  #ff3d71;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    cursor: pointer;

    .link {
      color: #fff;
      font-weight: bold;
      text-decoration: none;
    }
`;



