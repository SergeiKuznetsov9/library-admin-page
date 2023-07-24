import classNames from "classnames";
import { FC } from "react";
import cls from "./Sidebar.module.scss";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { CheckBox } from "../../../shared/ui/CheckBox";
import { RoutePath } from "../../../shared/config/routeConfig/routeConfig";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const pathname = useLocation().pathname;

  const ex = () => {
    console.log("toggled");
  };

  return (
    <div className={classNames(className, cls.Sidebar)}>
      <div className={cls.wrapperForLinks}>
        <ul>
          <li className={cls.listItem}>
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
            {/* {pathname === RoutePath.books && ( */}
            <div style={{overflow: 'hidden'}}>

              <ul>
                <li className={cls.listItem}>
                  <CheckBox onToggle={ex} label="Забронирована" />
                </li>
                <li className={cls.listItem}>
                  <CheckBox onToggle={ex} label="Выдана" />
                </li>
              </ul>
            </div>
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
            {/* {pathname === RoutePath.users && ( */}
              <ul>
                <li className={cls.listItem}>
                  <CheckBox onToggle={ex} label="Все" />
                </li>
                <li className={cls.listItem}>
                  <CheckBox onToggle={ex} label="Держатели книг" />
                </li>
                <li className={cls.listItem}>
                  <CheckBox onToggle={ex} label="Заблокированные" />
                </li>
              </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
