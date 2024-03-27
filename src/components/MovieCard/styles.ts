import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  padding: 16px;

  background-color: #fff;
  border-radius: 4px;

  @media (max-width: 500px) {
    width: 100%;
  }
`

export const FilmImage = styled.img`
  width: 147px;
`

export const FilmText = styled.div`
  font-weight: bold;
  text-align: center;

  p {
    color: #333;
    font-size: 0.75rem;
    margin-bottom: 8px;
  }

  span {
    color: #2F2E41;
    font-size: 1rem;
  }
`
