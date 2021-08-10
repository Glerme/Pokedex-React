import { NextComponentType } from "next";

import { PageLoaderContainer, PageLoaderFrame } from "./styles";

const PageLoader: NextComponentType = () => {
  return (
    <PageLoaderContainer>
      <PageLoaderFrame />
    </PageLoaderContainer>
  );
};

export default PageLoader;
