import React from "react";
import SearchNews from "../components/SearchNews";
import { NewsProvider } from "../contexts/NewsContext";
import NewsList from "../components/NewsList";

export default function Home() {
  return (
    <>
      <NewsProvider>
        <SearchNews />
        <NewsList />
      </NewsProvider>
    </>
  );
}
