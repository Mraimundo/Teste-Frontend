import styled from "styled-components";

export const SideBarWrapper = styled.aside`
  background-color: transparent;
  padding: 20px 0 0 20px;
  display: flex;
  flex-direction: column;
`;

export const SideBarList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SideBarItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.4rem;
    height: 6.4rem;
    border: 4px solid #004a45;
    border-radius: 12.8rem;
    font-size: 4rem;
    font-weight: bold;
    color: #004a45;
    cursor: pointer;
    transition: all .2s;
    background-color: #00d68f;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    &:hover {
        background-color: #004a45;
        color: #00d68f;
    }

    &:not(last-of-type) {
        margin-bottom: 1.6rem;
    }
`;

export const Content = styled.div`
  position: relative;
  height: 96%;
  margin-top: 156px;
  background: #F7F9FC;
  border-radius: 24px 24px 5px 5px;
  padding-top: 90px;
`;

export const AddPhoto = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 147px;
  height: 147px;
  top: -70px;
  left: 50%;
  transform: translateX(-50%);
  background: #F7F9FC;
  border: 4px solid #00D68F;
  border-radius: 50%;
`;

export const Container = styled.form`
  padding: 0 20px 0 20px;
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: #db2c66;
    color: #fff;
    border-radius: 2rem;
    border: 0;
    font-size: 1.3rem;
    font-weight: bold;
    align-items: center;
    text-transform: uppercase;
    cursor: pointer;
  }
`;


