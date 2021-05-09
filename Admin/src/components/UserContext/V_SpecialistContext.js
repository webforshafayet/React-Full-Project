import React, { useState, createContext } from "react";

export const V_SpecialistContext = createContext();

export const V_SpecialistProvider = (props) => {
  
    const [users, setUsers] = useState([
    // { id: 1, name: "Salman", position: "Front End Dev", salary: 28000 },
    // { id: 2, name: "Shuvo", position: "Data Scientist", salary: 26000 },
    // { id: 3, name: "Mahadi", position: "Full Stack Dev", salary: 27000 },



    { id: 1, nid: "Vs_123", username: "V_SpecialistSalman", password: "V_sss", email: "V_Specialistsalman@gmail.com", fullname: "V_SpecialistSalman Hossain", nationality: "India" },
    { id: 2, nid: "Vs_456", username: "V_SpecialistSafayet", password: "V_sss", email: "V_SpecialistSafayet@gmail.com", fullname: "V_SpecialistSafayet Hossain", nationality: "Bangladesh" },
    { id: 3, nid: "Vs_678", username: "V_SpecialistSohan", password: "V_sss", email: "V_SpecialistSohan@gmail.com", fullname: "V_SpecialistSohan Hossain", nationality: "Bangladesh" },
  ]);

  return (
    <V_SpecialistContext.Provider value={[users, setUsers]}>
      {props.children}
    </V_SpecialistContext.Provider>
  );
};

export default V_SpecialistProvider;