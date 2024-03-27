import { useContext } from "react";

import { CartContext } from "../../contexts/cart";

import { Container, FilmImage, FilmText } from "./styles";

import Button from "../Button";
import cartIcon from "../../assets/cart-icon.svg";

type FilmProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export function MovieCard(props: FilmProps) {
  const { id, image, price, title } = props;
  const { cart, addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addItemToCart(id, image, price, title, 1);
  };

  const itemQuantityInCart = cart.find((item) => item.id === id);

  return (
    <Container>
      <FilmImage src={image} />
      <FilmText>
        <p>{title}</p>
        <span>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </FilmText>
      <Button
        variant={itemQuantityInCart?.quantity ? "selected" : "empty"}
        onClick={() => handleAddToCart()}
      >
        <img
          src={cartIcon}
          alt="ícone de carrinho de compras"
          style={{ marginRight: 5 }}
        />
        {itemQuantityInCart ? itemQuantityInCart.quantity : 0} ADICIONAR AO
        CARRINHO
      </Button>
    </Container>
  );
}
