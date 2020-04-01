import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();
const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { id: uuidv4(), title: "React Hooks" },
    { id: uuidv4(), title: "React State" },
    { id: uuidv4(), title: "React Props" }
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
