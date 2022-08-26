import React from "react";
import { Link } from "react-router-dom";
import { news } from "../App";

const Links: React.FC<{ Article: news }> = ({ Article }) => {
  return (
    <Link to={`/${Article.id}`}>
      <li
        key={Article.id}
        className="py-5 border-b-2 border-gray-700 hover:border-gray-200 hover:shadow-2xl hover:cursor-pointer"
      >
        {Article.title}
      </li>
    </Link>
  );
};

export default Links;
