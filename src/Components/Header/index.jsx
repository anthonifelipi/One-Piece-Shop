import { Container } from "./styles";

import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <Container>
      <h2 onClick={() => history.push("/")}>One Piece Store</h2>
      {/* <img src={imgHeader} alt="imagem do header" /> */}
      <button onClick={() => history.push("/cart")}> Carrinho </button>
    </Container>
  );
};
export default Header;
