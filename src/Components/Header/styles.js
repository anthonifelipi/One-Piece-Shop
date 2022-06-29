import styled from "styled-components";
import imgHeader from "../../img/header.jpg";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${imgHeader});
  border-bottom: 1px solid #808080;
  h2 {
    color: #ffffff;
    padding: 5px;
    cursor: pointer;
    background-color: #ffd01f;
    margin-left:10px;
    border-radius: 15px;
    text-align: center;
  }

  button {
    color: #ffffff;
    border: none;
    padding: 10px;
    font-size: 16px;
    font-weight: 700;
    background-color: #ffd01f;
    cursor: pointer;
    margin-right: 30px;
    border-radius: 5px;
    /* width: 201px; */
   
  }
  /* img {
    width: 100%;
    height: 100%;
  } */
`;
