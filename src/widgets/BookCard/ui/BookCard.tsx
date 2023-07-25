import { FC } from "react";
import cls from "./BookCard.module.scss";
import { Button } from "../../../shared/ui/Button/ui/Button";

interface BookCardProps {
  className?: string;
  title?: string;
  img?: any;
}

export const BookCard: FC<BookCardProps> = ({ title, img }) => {
  return (
    <li className={cls.card}>
      <div className={cls.imgBlock}>
        <div className={cls.imgContainer}>
          <img src={img} alt={title} />
        </div>
      </div>

      <div className={cls.titleBlock}>
        {/* {handleHighlight(title)} */}
        {title}
      </div>

      <div className={cls.holderBlock}>Holderr</div>

      <div className={cls.statusWithButtonsBlock}>
        <div className={cls.status}>Statustatustatustatustatus</div>

        <div className={cls.buttons}>
          {/*         <button style={{ width: "174px", height: "40px" }}>
          Отметка о возврате
        </button> */}
          <Button className={cls.cardButton} onClick={() => console.log("hello")} view="secondary">
            Отметка о возврате
          </Button>
          <Button className={cls.cardButton} onClick={() => console.log("hello")} view="primary">
            Продлить
          </Button>
        </div>
      </div>
    </li>
  );
};
