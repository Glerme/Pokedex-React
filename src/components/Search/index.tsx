import { NextPage } from "next";

import { ImSearch } from "react-icons/im";

const Search: NextPage = () => {
  return (
    <>
      <section>
        <input type="text" placeholder="Buscar" />
        <button type="submit">
          <ImSearch size={28} />
        </button>
      </section>
    </>
  );
};

export default Search;
