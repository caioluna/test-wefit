import { ChangeEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Container, SearchButton, SearchInput } from "./styles";

import searchIcon from "../../assets/search.png";

export function SearchBar() {
  const [values, setValues] = useState("");
  const [, setSearch] = useSearchParams({});
  const navigate = useNavigate();

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValues(value);
  };

  const handleSearch = () => {
    navigate("/search");
    setSearch({ "search-query": values });
  };

  return (
    <Container>
      <SearchInput
        placeholder="Buscar filme pelo nome"
        value={values}
        onChange={changeValue}
        onBlur={() => handleSearch()}
      />
      <SearchButton onClick={() => handleSearch()}>
        <img src={searchIcon} alt="ícone de lupa" />
      </SearchButton>
    </Container>
  );
}
