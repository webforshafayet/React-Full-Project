import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  
    const [users, setUsers] = useState([
    // { id: 1, name: "Salman", position: "Front End Dev", salary: 28000 },
    // { id: 2, name: "Shuvo", position: "Data Scientist", salary: 26000 },
    // { id: 3, name: "Mahadi", position: "Full Stack Dev", salary: 27000 },



    { id: 1, username: "Salman", password: "sss", email: "salman@gmail.com", fullname: "Salman Hossain", nationality: "India" },
    { id: 2, username: "Safayet", password: "sss", email: "Safayet@gmail.com", fullname: "Safayet Hossain", nationality: "Bangladesh" },
    { id: 3, username: "Sohan", password: "sss", email: "Sohan@gmail.com", fullname: "Sohan Hossain", nationality: "Bangladesh" },
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;