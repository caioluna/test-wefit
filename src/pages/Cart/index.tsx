import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import { EmptyPage } from "../EmptyPage";

import { CartContext } from "../../contexts/cart";
import trashIcon from "../../assets/trash.svg";
import minusIcon from "../../assets/minus.svg";
import sumIcon from "../../assets/sum.svg";

import {
  Container,
  CustomButton,
  Divider,
  ItemQuantityDisplay,
  ItemsGrid,
  MobileGrid,
  MobilePhotoContainer,
  PriceWrapper,
  ProductInfo,
  ProductWrapper,
  QuantityWrapper,
  TotalValue,
} from "./styles";

export function Cart() {
  const {
    cart,
    resetCart,
    decreaseCartItem,
    increaseCartItem,
    deleteItemFromCart,
  } = useContext(CartContext);
  const navigate = useNavigate();

  const cartTotal = cart.reduce(
    (total, cart) => total + cart.price * cart.quantity,
    0
  );

  const handleFinishPurchase = () => {
    if (cart.length !== 0) {
      resetCart();
      navigate("/success");
    }
  };

  return (
    <Container>
      {cart.length === 0 ? (
        <EmptyPage />
      ) : (
        <>
          <ItemsGrid>
            <h4>Produto</h4>
            <h4>QTD</h4>
            <h4>Subtotal</h4>
          </ItemsGrid>

          <ItemsGrid>
            {cart.map((item) => (
              <>
                <ProductWrapper>
                  <div>
                    <img src={item.image} alt="Imagem do produto" />
                    <ProductInfo>
                      <p>{item.title}</p>
                      <span>
                        {item.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                    </ProductInfo>
                  </div>
                </ProductWrapper>

                <QuantityWrapper>
                  <CustomButton onClick={() => decreaseCartItem(item.id)}>
                    <img src={minusIcon} alt="ícone do botão de menos" />
                  </CustomButton>

                  <ItemQuantityDisplay>{item.quantity}</ItemQuantityDisplay>

                  <CustomButton onClick={() => increaseCartItem(item.id)}>
                    <img src={sumIcon} alt="ícone do botão de mais" />
                  </CustomButton>
                </QuantityWrapper>

                <PriceWrapper>
                  {(item.price * item.quantity).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </PriceWrapper>

                <CustomButton onClick={() => deleteItemFromCart(item.id)}>
                  <img src={trashIcon} alt="Ícone lata de lixo" />
                </CustomButton>
              </>
            ))}
          </ItemsGrid>

          <MobileGrid>
            {cart.map((item) => (
              <>
                <MobilePhotoContainer>
                  <img src={item.image} alt="Imagem do produto" />
                </MobilePhotoContainer>

                <div>
                  <ProductInfo>
                    <p>{item.title}</p>
                    <span>
                      {item.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                      <CustomButton onClick={() => deleteItemFromCart(item.id)}>
                        <img src={trashIcon} alt="Ícone lata de lixo" />
                      </CustomButton>
                    </span>
                  </ProductInfo>

                  <QuantityWrapper>
                    <CustomButton onClick={() => decreaseCartItem(item.id)}>
                      <img src={minusIcon} alt="ícone do botão de menos" />
                    </CustomButton>

                    <ItemQuantityDisplay>{item.quantity}</ItemQuantityDisplay>

                    <CustomButton onClick={() => increaseCartItem(item.id)}>
                      <img src={sumIcon} alt="ícone do botão de mais" />
                    </CustomButton>
                    <PriceWrapper>
                      <span>Subtotal</span>
                      {(item.price * item.quantity).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </PriceWrapper>
                  </QuantityWrapper>
                </div>
              </>
            ))}
          </MobileGrid>

          <Divider />

          <ItemsGrid>
            <Button
              onClick={handleFinishPurchase}
              disabled={cart.length === 0}
              variant="empty"
              style={{
                maxWidth: "173px",
                fontSize: "0.75rem",
                gridColumn: "span 2",
              }}
            >
              FINALIZAR PEDIDO
            </Button>
            <TotalValue>
              <h4 style={{ margin: 0 }}>Total</h4>
              <span>
                {cartTotal.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </TotalValue>
          </ItemsGrid>
        </>
      )}
    </Container>
  );
}
