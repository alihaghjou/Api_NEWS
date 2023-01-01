import React from "react";
import Links from "./Links";
import { news } from "../App";

const Lists = ({
  news,
  isLoading,
}: {
  news: news[] | undefined;
  isLoading: boolean;
}) => {
  if (isLoading && !news) return <div>Loading...</div>;
  if (news === undefined) return null;
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
