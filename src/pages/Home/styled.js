import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0,214,143,1), rgba(0,214,143, 0.48));
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
`;

export const Button = styled.button`
    margin-top: 25px;
    width: 84px;
    height: 38px;
    display: flex;
    justify-content: center;
    border: none;
    border-radius: 50px;
    align-items: center;
    background:  #ff3d71;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    .link {
      color: #fff;
      font-weight: bold;
      text-decoration: none;
    }
`;



