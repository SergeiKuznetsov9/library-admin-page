import { FC } from "react";
import cls from "./UserCard.module.scss";
import { Button } from "../../../shared/ui/Button/ui/Button";
import { ThemeLabel, UserLabel } from "../../../shared/ui/UserLabel";
import { BooksQuontity } from "./BooksQuontity/BooksQuontity";

interface UserCardProps {
  className?: string;
  img?: any;
  userName: string;
  login: string;
  readedBooks: number;
  regDate: string;
  telNumber: string;
  status: "blocked" | "active";
  labelView?: any;
  isBlocked?: boolean;
}

export const UserCard: FC<UserCardProps> = ({
  className,
  img,
  userName,
  login,
  readedBooks,
  regDate,
  telNumber,
  status,
  labelView,
  isBlocked = false,
}) => {
  return (
    <li className={cls.UserCard}>
      <div className={cls.imgBlock}>
        <div className={cls.imgContainer}>
          <img src={img} alt="avatar" />
        </div>
      </div>

      <div className={cls.nameBlock}>{userName}</div>

      <div className={cls.loginBlock}>
        <span className={cls.subtitle}>Логин:</span>
        <span>{login}</span>
      </div>

      <div className={cls.readedBooksBlock}>
        <BooksQuontity quontity={readedBooks} />
      </div>

      <div className={cls.userInfoBlock}>
        <span className={cls.userInfoLabel}>
          <span className={cls.subtitle}>Дата регистрации: </span>
          <span className={cls.info}>{regDate}</span>
        </span>
        <span className={cls.userInfoLabel}>
          <span className={cls.subtitle}>Номер телефона: </span>
          <span className={cls.info}>{telNumber}</span>
        </span>
      </div>

      <div className={cls.buttonBlock}>
        <Button
          onClick={() => console.log("blocked")}
          view="secondary"
          className={cls.cardButton}
        >
          Заблокировать
        </Button>
      </div>

      <UserLabel
        className={cls.UserLabel}
        date="29.05"
        theme={ThemeLabel.WARNING}
      />

      <div className={cls.blockingStyle}></div>
    </li>
  );
};
