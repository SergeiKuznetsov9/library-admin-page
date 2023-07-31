import { FC } from "react";
import { Button } from "../../../shared/ui/Button";
import cls from "./BookCard.module.scss";

type BookCardProps = {
  className?: string;
  img?: any;
  title?: string;
  holder: string;
}

export const BookCard: FC<BookCardProps> = ({ title, img, holder }) => (
  <li className={cls.card}>
    <div className={cls.imgBlock}>
      <div className={cls.imgContainer}>
        <img src={img} alt={title} />
      </div>
    </div>

    <div className={cls.titleBlock}>
      {title}
    </div>

    <div className={cls.holderBlock}>
      <span className={cls.holderLabel}>
        Пользователь: <span className={cls.holderName}>{holder}</span>
      </span>
    </div>

    <div className={cls.statusWithButtonsBlock}>
      <div className={cls.status}>
        <span className={cls.statusLabel}>
          Срок: <span className={cls.statusInfo}>17.04.2021-24.04.2021</span>
        </span>
        <span className={cls.statusLabel}>
          Статус: <span className={cls.statusInfo}>Выдана</span>
        </span>
      </div>

      <div className={cls.buttons}>
        <Button
          onClick={() => console.log("hello")}
          view="secondary"
          className={cls.cardButton}
        >
          Отметка о возврате
        </Button>
        <Button
          onClick={() => console.log("hello")}
          view="primary"
          className={cls.cardButton}
        >
          Продлить
        </Button>
      </div>
    </div>
  </li>
);
