import React, { useState, createContext } from "react";

export const SellerContext = createContext();

export const SellerProvider = (props) => {
  
    const [users, setUsers] = useState([
    // { id: 1, name: "Salman", position: "Front End Dev", salary: 28000 },
    // { id: 2, name: "Shuvo", position: "Data Scientist", salary: 26000 },
    // { id: 3, name: "Mahadi", position: "Full Stack Dev", salary: 27000 },



    { id: 1, username: "sellerSalman", password: "sssseller", email: "sellersalman@gmail.com", fullname: "seller Salman Hossain", nationality: "India" },
    { id: 2, username: "sellerSafayet", password: "sssseller", email: "sellerSafayet@gmail.com", fullname: "seller Safayet Hossain", nationality: "Bangladesh" },
    { id: 3, username: "sellerSohan", password: "sssseller", email: "sellerSohan@gmail.com", fullname: "seller Sohan Hossain", nationality: "Bangladesh" },
  ]);

  return (
    <SellerContext.Provider value={[users, setUsers]}>
      {props.children}
    </SellerContext.Provider>
  );
};

export default SellerProvider;