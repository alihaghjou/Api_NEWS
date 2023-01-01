import React from "react";
import { news } from "../App";
import { useParams, useNavigate } from "react-router-dom";

const Article = ({
  article,
  isLoading,
}: {
  article: news[] | undefined;
  isLoading: boolean;
}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  if (isLoading) return <div>Loading...</div>;
  if (article === undefined) return null

  const item = article.find((items) => items.id.toString() === id);

  async function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    navigate("../", { replace: true });
  }
  return (
    <>
      {item && (
        <main className="flex flex-col pb-10">
          <div className="border-b-2 border-gray-700 mb-5 pb-5">
            <h2 className="pb-3 text-xl">{item.title}</h2>
            <h4 className="text-cyan-500 text-base">{item.updatedAt}</h4>
          </div>
          <img src={item.imageUrl} alt="News" className="w-3/5 mx-auto" />
          <p className="py-5">{item.summary}</p>
          <p className="py-3">
            For more visit <a href={item.url}>here</a>.
          </p>
          <p className="mb-5">Published at {item.publishedAt}</p>
          <button
            className="bg-none text-slate-100 border-2 rounded border-slate-100 self-center px-4 py-2 hover:bg-slate-100 hover:border-slate-100 hover:text-slate-900"
            onClick={(event) => handleClick(event)}
          >
            Home
          </button>
        </main>
      )}
    </>
  );
};

export default Article;
