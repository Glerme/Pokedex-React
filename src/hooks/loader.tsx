import { NextComponentType } from "next";
import { createContext, useCallback, useContext, useState } from "react";

interface LoaderContextData {
  isLoader: boolean;
  addLoader: () => void;
  removeLoader: () => void;
}

const LoaderContext = createContext({} as LoaderContextData);

export const LoaderProvider: NextComponentType = ({ children }) => {
  const [isLoader, setIsLoader] = useState(false);

  const addLoader = useCallback(() => {
    setIsLoader(false);
  }, [isLoader]);

  const removeLoader = useCallback(() => {
    setIsLoader(false);
  }, [isLoader]);

  return (
    <LoaderContext.Provider value={{ isLoader, addLoader, removeLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const context = useContext(LoaderContext);

  if (!context) {
    throw new Error("useLoader must be used whithin an LoaderProvider");
  }

  return context;
};
