import React, { useState, createContext } from "react";

export const FeedbackContext = createContext();

export const FeedbackProvider = (props) => {
  
    const [users, setUsers] = useState([
    // { id: 1, name: "Salman", position: "Front End Dev", salary: 28000 },
    // { id: 2, name: "Shuvo", position: "Data Scientist", salary: 26000 },
    // { id: 3, name: "Mahadi", position: "Full Stack Dev", salary: 27000 },



    { id: 1, date: "01.01.2021", username: "Salman", feedback: "good" },

    { id: 2, date: "01.01.2021", username: "kamal", feedback: "good" },

    { id: 3, date: "01.01.2021", username: "Rahim",feedback: "good"},
     
  ]);

  return (
    <FeedbackContext.Provider value={[users, setUsers]}>
      {props.children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackProvider;