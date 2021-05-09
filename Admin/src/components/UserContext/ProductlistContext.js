import React, { useState, createContext } from "react";

export const ProductlistContext = createContext();

export const ProductlistProvider = (props) => {
  
    const [users, setUsers] = useState([
    // { id: 1, name: "Salman", position: "Front End Dev", salary: 28000 },
    // { id: 2, name: "Shuvo", position: "Data Scientist", salary: 26000 },
    // { id: 3, name: "Mahadi", position: "Full Stack Dev", salary: 27000 },



    { id: 1, sellername: "Salman", description: "good product", cost: "10000" },
    { id: 2, sellername: "Safayet", description: "very good product", cost: "20000" },
    { id: 3, sellername: "Sohan", description: "good product", cost: "30000" },
  ]);

  return (
    <ProductlistContext.Provider value={[users, setUsers]}>
      {props.children}
    </ProductlistContext.Provider>
  );
};

export default ProductlistProvider;