import { CartWrapper, Container } from "./styles";
import { CartContext } from "../../contexts/cart";

import basketIcon from "../../assets/basket-icon.png";
import { useContext } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const { cart } = useContext(CartContext);
  const itemSum = cart.reduce((total, cart) => total + cart.quantity, 0);

  return (
    <Container>
      <p>WeMovies</p>

      <CartWrapper>
        <div>
          <p>Meu Carrinho</p>
          <span>{itemSum} itens</span>
        </div>

        <Link to="/cart">
          <img src={basketIcon} alt="icone da cesta de compras" />
        </Link>
      </CartWrapper>
    </Container>
  );
}
