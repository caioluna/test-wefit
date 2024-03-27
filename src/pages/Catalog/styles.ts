import styled from "styled-components";

export const FilmContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
`

export const FilmGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 16px;
  
  width: 100%;
  
  @media (max-width: 500px) {
    grid-template-columns: 1fr;

  }
`
