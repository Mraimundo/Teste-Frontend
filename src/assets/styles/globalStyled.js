import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    -ms-overflow-style: scrollbar;
  }

  html,
  body {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #222;
  }

  a,
  p,
  span,
  label,
  div,
  b,
  i,
  strong,
  ul,
  li,
  input,
  textarea,
  select,
  td,
  th,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6  {
    font-weight: 400;
  }

  b,
  strong {
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }

  input ,
  select {
    appearance: none;
  }

  ul {
    list-style: none;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 360px;
    height: 60%;
    margin-top: -60px;
    background: linear-gradient(90deg, #43E97B 0%, #38F9D7 100%);;
    padding: 0px;
    position: relative;
    transform: translateY(-40px);
    border-radius: 5px;
    
  }

  @media screen and (max-width: 720px){
    .react-modal-content {
      height: 80%;
    }
   }

   @media screen and (width: 360px){
    .react-modal-content {
      height: 82%;
    }
   }
  
   @media screen and (min-width: 718px) and (max-width: 995px){
    .react-modal-content {
      height: 60%;
      transform: translateY(-50px);
    }
   }

  .react-modal-close {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 24px;
    top: 24px;
    border-color: #222;
    border-radius: 20px;
    cursor: pointer;
  }

`
