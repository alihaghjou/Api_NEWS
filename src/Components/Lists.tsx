import React from "react";
import Links from "./Links";
import { news } from "../App";

const Lists: React.FC<{ news: news[] }> = ({ news }) => {
  return (
    <main>
      <ul>
        {news.map((Article: news) => (
          <Links Article={Article} />
        ))}
      </ul>
    </main>
  );
};

export default Lists;
