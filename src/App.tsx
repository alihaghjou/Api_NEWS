import { Routes, Route } from "react-router-dom";
import Article from "./Components/Article";
import Layout from "./Components/Layout";
import Lists from "./Components/Lists";
import useSWR from "swr";

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
  const {
    data: news,
    isLoading,
    error,
  } = useSWR<news[]>("https://api.spaceflightnewsapi.net/v3/articles", (url) =>
    fetch(url).then((r) => r.json())
  );

  if (error) return <div>Error</div>;
  return (
    <Routes>
      <Route path="Api_NEWS" element={<Layout />}>
        <Route index element={<Lists news={news} isLoading={isLoading} />} />
        <Route
          path=":id"
          element={<Article article={news} isLoading={isLoading} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
