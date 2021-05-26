import { NextComponentType } from "next";

import * as Styled from "../../styles/PageLoader";

const PageLoader: NextComponentType = () => {
  return (
    <Styled.PageLoaderContainer>
      <Styled.PageLoaderFrame />
    </Styled.PageLoaderContainer>
  );
};

export default PageLoader;
