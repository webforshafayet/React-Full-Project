import React, { useState, createContext } from "react";

export const SpecialistContext = createContext();

export const SpecialistProvider = (props) => {
  
    const [users, setUsers] = useState([
    // { id: 1, name: "Salman", position: "Front End Dev", salary: 28000 },
    // { id: 2, name: "Shuvo", position: "Data Scientist", salary: 26000 },
    // { id: 3, name: "Mahadi", position: "Full Stack Dev", salary: 27000 },



    { id: 1, username: "SpecialistSalman", password: "Specialistsss", email: "Specialistsalman@gmail.com", fullname: "Specialist Salman Hossain", nationality: "India" },
    { id: 2, username: "SpecialistSafayet", password: "Specialistsss", email: "SpecialistSafayet@gmail.com", fullname: "Specialist Safayet Hossain", nationality: "Bangladesh" },
    { id: 3, username: "SpecialistSohan", password: "Specialistsss", email: "SpecialistSohan@gmail.com", fullname: "Specialist Sohan Hossain", nationality: "Bangladesh" },
  ]);

  return (
    <SpecialistContext.Provider value={[users, setUsers]}>
      {props.children}
    </SpecialistContext.Provider>
  );
};

export default SpecialistProvider;