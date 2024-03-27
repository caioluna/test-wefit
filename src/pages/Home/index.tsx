import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";

import { CartContextProvider } from "../../contexts/cart";

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <CartContextProvider>
        <Header />
        <Outlet />
      </CartContextProvider>
    </Container>
  );
}
