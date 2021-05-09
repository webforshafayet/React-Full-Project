import React, { useState, createContext } from "react";

export const AdminProfileContext = createContext();

export const AdminProfileProvider = (props) => {
  
    const [users, setUsers] = useState([
    // { id: 1, name: "Salman", position: "Front End Dev", salary: 28000 },
    // { id: 2, name: "Shuvo", position: "Data Scientist", salary: 26000 },
    // { id: 3, name: "Mahadi", position: "Full Stack Dev", salary: 27000 },



    { id: 1, nid: "123232435", username: "shafayet", password: "567", email: "sss@gmail.com", fullname: "Shafayet hossain", nationality: "Bangladesh" ,address:"Tangail" , education : "BSC in CSE" , experience :"XYZ company"  },
    
  ]);

  return (
    <AdminProfileContext.Provider value={[users, setUsers]}>
      {props.children}
    </AdminProfileContext.Provider>
  );
};

export default AdminProfileProvider;