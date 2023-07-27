import { SearchingBar } from "../../../widgets/SearchingBar";
import { BookCard } from "../../../widgets/BookCard";
import img from "./image.png";
import cls from "./BooksPage.module.scss";

const BooksPage = () => {
  return (
    <div className={cls.BooksPage}>
      <SearchingBar />
      <ul className={cls.bookList}>
        <BookCard
          title="Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих"
          img={img}
          holder="Коробейников Иван"
        />
        <BookCard
          title="Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих"
          img={img}
          holder="Коробейников Иван"
        />
        <BookCard
          title="Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих"
          img={img}
          holder="Коробейников Иван"
        />
        <BookCard
          title="Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих"
          img={img}
          holder="Коробейников Иван"
        />
        <BookCard
          title="Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих"
          img={img}
          holder="Коробейников Иван"
        />
      </ul>
    </div>
  );
};

export default BooksPage;
