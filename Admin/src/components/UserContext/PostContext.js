import React, { useState, createContext } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {
  
    const [users, setUsers] = useState([
    // { id: 1, name: "Salman", position: "Front End Dev", salary: 28000 },
    // { id: 2, name: "Shuvo", position: "Data Scientist", salary: 26000 },
    // { id: 3, name: "Mahadi", position: "Full Stack Dev", salary: 27000 },



    { id: 1, tittle: "A",  post: "1st post", comment : "good"   },
    { id: 2, tittle: "B",  post: "2nd post", comment : "very good"   },
    { id: 3, tittle: "C",  post: "3rd post", comment : "bad"   },
     
  ]);

  return (
    <PostContext.Provider value={[users, setUsers]}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostProvider;