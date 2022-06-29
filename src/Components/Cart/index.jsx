import { Container, ContainerGeral, DivResumo, DivHeader } from "./styles";
import { FiTrash2 } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <ContainerGeral>
      <div>
        <DivHeader>
          <p>Produtos</p>
          <p>Preço</p>
        </DivHeader>
        {cart.length === 0 ? (
          <Container>
            {" "}
            <h2>Carrinho Vazio!</h2> <h3>Adicione algum produto.</h3>{" "}
          </Container>
        ) : (
          cart.map((item, i) => (
            <Container key={i}>
              <img src={item.image} alt="" />
              <h4>{item.name}</h4>
              <p>
                {item.price.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
                <button onClick={() => removeFromCart(item)}>
                  <FiTrash2 />
                </button>
              </p>
            </Container>
          ))
        )}
      </div>
      <DivResumo>
        <h3>Resumo do pedido</h3>
        <div>
          <h4>{cart.length} produtos</h4>
          <p>
            {total.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </p>
        </div>
        <button>Finalizar Compra</button>
      </DivResumo>
    </ContainerGeral>
  );
};
export default Cart;
