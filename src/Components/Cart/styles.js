import styled from "styled-components";

export const ContainerGeral = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #39424E;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  width: 80%;
  border: 1px solid #cdcdcd;
  border-radius: 5px;
  margin-left: 5%;
  background-color: #D3D4E6;
  box-shadow: -5px 5px 5px 0px rgba(0, 0, 0, 0.75);

  h2 {
    padding: 25px;
    color: #FFFFFF;
  }
  h3 {
    padding: 25px;
    color: #FFFFFF;
  }

  h4 {
    padding-left: 15px;
  }
  p {
    display: flex;
    align-items: center;
    font-weight: 700;
    padding: 15px;
    height: 100%;
    margin: 5px;
    padding: 5px;
  }

  img {
    width: 30%;
    height: 250px;
  }
  button {
    color: #FFFFFF;
    border: none;
    padding: 8px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    background-color: #39424E;
  }
`;

export const DivResumo = styled.div`
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 200px;
  margin: 5%;
  border-top: 1px solid #000000;
  border-right: 1px solid #000000;
  border-radius: 3px;
  background-color: #39424E;
  box-shadow: -5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 10px;

  div {
    background-color: #39424E;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    color: #FFFFFF;
    font-weight: 700;
    font-size: 16px;
    background: #39424E;
    border: 2px hidden #ffffff;
    box-shadow: -3px 6px 6px #000000;
    border-radius: 0px 25px 0px 25px;
    padding: 20px 40px;
    cursor: pointer;
    margin: 5px auto;
    border-top: 1px solid #cdcdcd;
  }
`;

export const DivHeader = styled.div`

  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 5% 5% -1.3% 5%;
  background-color: #39424E;
  border-radius: 5px;
  border: 1px solid #cdcdcd;

  p {
    width: 100%;
    padding: 0px 10px 0px 10px;
    color: #FFFFFF;
  }

  p + p {
    color: #FFFFFF;
    width: 100%;
    padding: 0px 10px 0px 10px;
    text-align: right;
  }
`;
