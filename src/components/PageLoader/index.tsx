import { NextComponentType } from "next";

import { PageLoaderContainer, PageLoaderFrame } from "./styles";

export const PageLoader: NextComponentType = () => {
  return (
    <PageLoaderContainer>
      <PageLoaderFrame />
    </PageLoaderContainer>
  );
};
