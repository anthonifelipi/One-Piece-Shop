import { Container, ContainerGeral, Button } from "./styles";
import { toast } from "react-toastify";

import { useContext } from "react";
import { ProductsContext } from "../../Providers/Products";
import { CartContext } from "../../Providers/Cart";

const Products = () => {
  const { showCase } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  return (
    <ContainerGeral>
      {showCase.map((item, i) => {
        return (
          <Container key={i}>
            <img src={item.image} alt="" />
            <h4>{item.name}</h4>
            <p>
              {item.price.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <Button onClick={() => addToCart(item)}>Comprar</Button>
          </Container>
        );
      })}
    </ContainerGeral>
  );
};
export default Products;
