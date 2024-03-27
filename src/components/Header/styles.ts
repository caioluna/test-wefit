import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 88px;
  color: #fff;

  > p {
    font-weight: bold;
    font-size: 1.25rem;
  }
`

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  div {
    text-align: right;
  }

  p {
    font-weight: 600;
    font-size: 0.875rem;
  }
  
  span {
    font-weight: 600;
    font-size: 0.75rem;
    color: #999;
  }
`

