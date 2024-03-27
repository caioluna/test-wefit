import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";

import { Container, Title, Wrapper } from "./styles";
import successImg from "../../assets/success.png";

export function SuccessPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Title>Compra realizada com sucesso!</Title>

        <img src={successImg} alt="Imagem de um homem confirmando a compra" />

        <Button
          onClick={() => navigate("/")}
          variant="empty"
          style={{
            maxWidth: "173px",
            textTransform: "uppercase",
            fontSize: ".75rem",
          }}
        >
          Voltar
        </Button>
      </Wrapper>
    </Container>
  );
}
