import styled from "styled-components";

import loaderImg from "../../assets/loader.png";

const Container = styled.div`
  margin-top: 40px;

  img {
    animation-name: rotation;
    animation-duration: 700ms;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export function Loader() {
  return (
    <Container>
      <img src={loaderImg} alt="imagem de carregamento" />
    </Container>
  );
}
