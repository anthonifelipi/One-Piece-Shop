import styled from "styled-components";

export const ContainerGeral = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #39424e;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
  width: 20%;
  border: 1px solid #000000;
  border-radius: 20px;
  background-color: #d3d4e6;

  h4 {
    padding-left: 15px;
    border-bottom: 1px solid #808080;
  }
  p {
    padding-left: 15px;
    border-bottom: 1px solid #808080;
  }

  img {
    width: 70%;
    height: 250px;
    border-radius: 50px;
    margin: 2% 15% 0 15%;
  }
`;

export const Button = styled.button`
  font: bold 13px Arial, Monaco, monospace;
  color: #dcdcdc;
  background: #40444a;
  border: 6px inset #cccccc;
  text-shadow: 0px -1px 10px #222222;
  box-shadow: 1px 1px 9px #000000;
  border-radius: 83px 0px 90px 40px;
  width: 100px;
  padding: 13px 17px;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 8px;
`;
