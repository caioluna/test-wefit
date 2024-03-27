import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  width: 100%;
  padding: 16px;
  margin-bottom: 24px;

  border-radius: 8px;
  background-color: #fff;
`

export const SearchInput = styled.input`
  width: 100%;

  background-color: transparent;
  color: #2F2E41;

  ::placeholder {
    color: #C0C0C0;
  }
`

export const SearchButton = styled.button`
  background-color: transparent;
  cursor: pointer;
`