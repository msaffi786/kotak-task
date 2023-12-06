import React, { createContext, useState } from "react";

const NewsContext = createContext();

export function NewsProvider({ children }) {
  const [results, setResults] = useState([]);

  return (
    <NewsContext.Provider value={{ results, setResults }}>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsContext;
