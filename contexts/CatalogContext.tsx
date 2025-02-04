import React, { createContext, useContext, useState, ReactNode } from "react";

type CatalogContextType = {
  search: string;
  setSearch: (value: string) => void;
};

export const CatalogContext = createContext<CatalogContextType | undefined>(
  undefined
);

export const CatalogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [search, setSearch] = useState("");

  return (
    <CatalogContext.Provider value={{ search, setSearch }}>
      {children}
    </CatalogContext.Provider>
  );
};
