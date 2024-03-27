import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 4px;

  padding: 24px;
  width: 100%;
`

export const MobileGrid = styled.div`
  display: none;

  @media (max-width: 500px) {
    display: grid;
    gap: 16px;
    grid-template-columns: 64px 1fr;
  }
`

export const MobilePhotoContainer = styled.div`
  img {
    width: 64px;
  }
`

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: .8fr 1fr 1fr 24px;
  align-items: center;
  gap: 24px 0;

  h4 {
    text-transform: uppercase;
    color: #999;
    font-weight: bold;
    font-size: .875rem;
    margin-bottom: 28px;
  }

  &:not(:first-of-type) {
    color: #2F2E41;
  }

  @media (max-width: 500px) {
    &:first-of-type {
      display: none;
    }

    &:nth-of-type(2) {
      display: none;
    }

    &:last-of-type {
      button {
        max-width: 100% !important;
      }
    } 

    &:not(:first-of-type) {
      grid-template-columns: 1fr 1fr;
    }
  }
`

export const ProductWrapper = styled.div`
  > div {
    display: flex;
    align-items: center;

    img {
      width: 91px;
    }
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-left: 16px;

  p {
    font-size: 0.875rem;
  }
  
  p, span {
    font-weight: bold;
  }

  @media (max-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    margin-left: unset;
    height: 50%;

    p {
      max-width: 100px;
    }

    p, span {
      flex: 1;
    }

    span {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      button {
        margin-left: 16px;
      }
    }
  }
`

export const QuantityWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 11px;

  @media (max-width: 500px) {
    flex: 1;
    height: 50%;
  }
`

export const CustomButton = styled.button`
  background-color: transparent;
  cursor: pointer;
`

export const ItemQuantityDisplay = styled.div`
  width: 62px;
  height: 26px;
  padding: 3px;

  border: 1px solid #D9D9D9;
  border-radius: 4px;
  text-align: center;
`

export const PriceWrapper = styled.p`
  font-size: 1rem;
  font-weight: bold;

  span {
    display: none;
    text-transform: uppercase;
    color: #999;
    font-weight: bold;
    font-size: .875rem;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    flex: 1;

    :not(span) {
      font-size: 1rem !important;
    }
    
    span {
      font-size: .75rem !important;
      display: flex;
    }
  }
`

export const Divider = styled.hr`
  border-color: #999;
  margin-block: 24px;
`

export const TotalValue = styled.div`
  display: flex;
  gap: 24px;
  justify-content: flex-end;
  align-items: center;
  
  span {
    font-weight: bold;
    font-size: 1.5rem;
  }
  
  @media (max-width: 500px) {
    justify-content: space-between;
    grid-column: span 2;
    grid-row: 1;
  }
`