import React, { useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Article from "./Components/Article";
import Layout from "./Components/Layout";
import Lists from "./Components/Lists";

export interface news {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  launches: never[];
  events: never[];
}

function App() {
  const url = "https://api.spaceflightnewsapi.net/v3/articles";
  const [news, setnews] = useState<news[]>([]);
  const effectRun = useRef(false);

  useEffect(() => {
    if (effectRun.current === false) {
      gettingdata(url);
    }

    return () => {
      effectRun.current = true;
    };
  }, []);

  async function gettingdata(url: RequestInfo | URL) {
    const response = await fetch(url);
    const data = await response.json();
    setnews(data);
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Lists news={news} />} />
        <Route path=":id" element={<Article article={news} />} />
      </Route>
    </Routes>
  );
}

export default App;
