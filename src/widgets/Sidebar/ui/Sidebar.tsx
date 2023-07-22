import classNames from "classnames";
import { FC } from "react";
import cls from "./Sidebar.module.scss";
import { Link } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  return (
    <div className={classNames(className, cls.Sidebar)}>
      <Link to={"/users"}>Пользователи</Link>
      <Link to={"/books"}>Книги</Link>
    </div>
  );
};
