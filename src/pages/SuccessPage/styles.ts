import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  width: 100%;
  padding-top: 64px;
  padding-bottom: 143px;

  background-color: #fff;
  border-radius: 4px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  max-width: 350px;
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 2em;
  color: #2F2E41;
`