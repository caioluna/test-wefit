import styled from "styled-components";

export const Container = styled.button<{ variant: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  border-radius: 4px;
  padding: 16px 32px;

  background-color: ${(props) => props.variant === 'empty'
    ? '#009EDD'
    : '#039B00'};
  color: #fff;
  
  cursor: pointer;
  transition: all 300ms ease;
  
  &:hover {
    background-color: ${(props) => props.variant === 'empty'
    ? '#0073A1'
    : '#026400'};
    transition: all 300ms ease;
  }

  &:active {
    background-color: ${(props) => props.variant === 'empty'
    ? '#009EDD'
    : '#039B00'};
  }

  &:disabled {
    background-color: #ccc;
    pointer-events: none;
  }

  span {
    white-space: nowrap;
  }
  
`