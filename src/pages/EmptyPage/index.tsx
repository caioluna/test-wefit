import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";

import { Container, Title } from "./styles";
import emptyImg from "../../assets/empty-page.png";

export function EmptyPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Parece que não há nada por aqui :(</Title>
      <img
        src={emptyImg}
        alt="Imagem de uma mulher segurando um ícone azul de carregamento"
      />
      <Button
        onClick={() => navigate("/")}
        variant="empty"
        style={{ maxWidth: "173px", fontSize: ".75rem" }}
      >
        Recarregar página
      </Button>
    </Container>
  );
}
