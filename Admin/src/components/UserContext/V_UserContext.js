import React, { useState, createContext } from "react";

export const V_UserContext = createContext();

export const V_UserProvider = (props) => {
  
    const [users, setUsers] = useState([
    // { id: 1, name: "Salman", position: "Front End Dev", salary: 28000 },
    // { id: 2, name: "Shuvo", position: "Data Scientist", salary: 26000 },
    // { id: 3, name: "Mahadi", position: "Full Stack Dev", salary: 27000 },



    { id: 1, nid: "V_123", username: "V_Salman", password: "V_sss", email: "V_salman@gmail.com", fullname: "V_Salman Hossain", nationality: "India" },
    { id: 2, nid: "V_456", username: "V_Safayet", password: "V_sss", email: "V_Safayet@gmail.com", fullname: "V_Safayet Hossain", nationality: "Bangladesh" },
    { id: 3, nid: "V_678", username: "V_Sohan", password: "V_sss", email: "V_Sohan@gmail.com", fullname: "V_Sohan Hossain", nationality: "Bangladesh" },
  ]);

  return (
    <V_UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </V_UserContext.Provider>
  );
};

export default V_UserProvider;