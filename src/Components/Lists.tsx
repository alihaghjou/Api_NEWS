import Links from "./Links";
import { news } from "../App";
import Loading from "./Loading";

const Lists = ({
  news,
  isLoading,
}: {
  news: news[] | undefined;
  isLoading: boolean;
}) => {
  if (isLoading && !news) {
    return <Loading />;
  }
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
