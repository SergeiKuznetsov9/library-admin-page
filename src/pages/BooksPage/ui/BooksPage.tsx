import { BookCard } from "../../../widgets/BookCard";
import img from "./image.png";

const BooksPage = () => {
  return (
    <div style={{ paddingTop: "36px" }}>
      <ul>
        <BookCard
          title="Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих"
          img={img}
        />
      </ul>
    </div>
  );
};

export default BooksPage;
