import { NextPage } from "next";

import { ImSearch } from "react-icons/im";

import * as Styled from "../../styles/Search";

const Search: NextPage = () => {
  return (
    <Styled.SearchContainer>
      <section>
        <input type="text" placeholder="Buscar" />
        <button type="submit">
          <ImSearch size={28} />
        </button>
      </section>
    </Styled.SearchContainer>
  );
};

export default Search;
