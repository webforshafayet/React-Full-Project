import React, { useState, createContext } from "react";

export const  MassageContext = createContext();

export const MassageProvider = (props) => {
  
    const [users, setUsers] = useState([
    // { id: 1, name: "Salman", position: "Front End Dev", salary: 28000 },
    // { id: 2, name: "Shuvo", position: "Data Scientist", salary: 26000 },
    // { id: 3, name: "Mahadi", position: "Full Stack Dev", salary: 27000 },



    { id: 1, m1: "hello", m2 : "hiiiiiiii"   },
    { id: 2, m1: "hello", m2 : "hiiiiiiii"   },
    { id: 3, m1: "hello", m2 : "hiiiiiiii"   },
     
  ]);

  return (
    <MassageContext.Provider value={[users, setUsers]}>
      {props.children}
    </MassageContext.Provider>
  );
};

export default MassageProvider;