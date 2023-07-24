import classNames from "classnames";
import { FC, useState } from "react";
import cls from "./Sidebar.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { CheckBox } from "../../../shared/ui/CheckBox";
import { RoutePath } from "../../../shared/config/routeConfig/routeConfig";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const pathname = useLocation().pathname;
  const [isBooked, setIsBooked] = useState(false);
  const [isIssued, setIsIssued] = useState(false);
  const [isAll, setIsAll] = useState(false);
  const [isHolders, setIsHolders] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  return (
    <div className={classNames(className, cls.Sidebar)}>
      <ul>
        <li>
          <NavLink
            to={"/books"}
            className={({ isActive }) =>
              isActive
                ? classNames(cls.navLink, cls.navLinkActive)
                : cls.navLink
            }
          >
            Книги для брони
          </NavLink>
          <ul
            className={classNames(cls.checkBoxesForBooksWrapper, {
              [cls.checkBoxesWrapperHidden]: pathname !== RoutePath.books,
            })}
          >
            <li className={cls.listItem}>
              <CheckBox
                onToggle={() => setIsBooked((isBooked) => !isBooked)}
                status={isBooked}
                label="Забронирована"
              />
            </li>
            <li className={cls.listItem}>
              <CheckBox
                onToggle={() => setIsIssued((isIssued) => !isIssued)}
                status={isIssued}
                label="Выдана"
              />
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to={"/users"}
            className={({ isActive }) =>
              isActive
                ? classNames(cls.navLink, cls.navLinkActive)
                : cls.navLink
            }
          >
            Пользователи
          </NavLink>
          <ul
            className={classNames(cls.checkBoxesForUsersWrapper, {
              [cls.checkBoxesWrapperHidden]: pathname !== RoutePath.users,
            })}
          >
            <li className={cls.listItem}>
              <CheckBox
                onToggle={() => setIsAll((isAll) => !isAll)}
                status={isAll}
                label="Все"
              />
            </li>
            <li className={cls.listItem}>
              <CheckBox
                onToggle={() => setIsHolders((isHolders) => !isHolders)}
                status={isHolders}
                label="Держатели книг"
              />
            </li>
            <li className={cls.listItem}>
              <CheckBox
                onToggle={() => setIsLocked((isLocked) => !isLocked)}
                status={isLocked}
                label="Заблокированные"
              />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
