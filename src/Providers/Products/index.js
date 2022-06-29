import { createContext, useState } from "react";
import { arrayProducts } from "../../arrayProducts";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [showCase, setShowCase] = useState(arrayProducts);
  

  return (
    <ProductsContext.Provider value={{showCase}} >
      {children}
    </ProductsContext.Provider>
  );
};
