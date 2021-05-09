import React, { useState, createContext } from "react";

export const TransictionContext = createContext();

export const TransictionProvider = (props) => {
  
    const [users, setUsers] = useState([
    // { id: 1, name: "Salman", position: "Front End Dev", salary: 28000 },
    // { id: 2, name: "Shuvo", position: "Data Scientist", salary: 26000 },
    // { id: 3, name: "Mahadi", position: "Full Stack Dev", salary: 27000 },



    { id: 1, date: "01.01.2021", sellername: "Salman",buyername: "katibur", productname: "seed",quantity: "1kg",cost: "100" },

    { id: 2, date: "01.01.2021", sellername: "kamal",buyername: "jamal", productname: "paddy seed",quantity: "4kg",cost: "200" },

    { id: 3, date: "01.01.2021", sellername: "Rahim",buyername: "karim", productname: "flower seed",quantity: "10kg",cost: "300" },
     
  ]);

  return (
    <TransictionContext.Provider value={[users, setUsers]}>
      {props.children}
    </TransictionContext.Provider>
  );
};

export default TransictionProvider;