import classNames from "classnames";
import { FC, useState } from "react";
import cls from "./Sidebar.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { CheckBox } from "../../../shared/ui/CheckBox";
import { RoutePath } from "../../../shared/config/routeConfig/routeConfig";
import { NavigationItems } from "../../../shared/config/navigationConfig/navigationConfig";

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

  const { books, users } = NavigationItems;

  const booksCheckBoxesState = [
    {
      setValue: () => setIsBooked((isBooked) => !isBooked),
      value: isBooked,
    },
    {
      setValue: () => setIsIssued((isIssued) => !isIssued),
      value: isIssued,
    },
  ];

  const usersCheckBoxesState = [
    {
      setValue: () => setIsAll((isAll) => !isAll),
      value: isAll,
    },
    {
      setValue: () => setIsHolders((isHolders) => !isHolders),
      value: isHolders,
    },
    {
      setValue: () => setIsLocked((isLocked) => !isLocked),
      value: isLocked,
    },
  ];

  return (
    <div className={classNames(className, cls.Sidebar)}>
      <ul>
        <li>
          <NavLink
            to={books.to}
            className={({ isActive }) =>
              isActive
                ? classNames(cls.navLink, cls.navLinkActive)
                : cls.navLink
            }
          >
            {books.labelItem}
          </NavLink>
          <ul
            className={classNames(cls.checkBoxesForBooksWrapper, {
              [cls.checkBoxesWrapperHidden]: pathname !== RoutePath.books,
            })}
          >
            {books.checkBoxes.map((checkBox, index) => (
              <li className={cls.listItem}>
                <CheckBox
                  onToggle={booksCheckBoxesState[index].setValue}
                  status={booksCheckBoxesState[index].value}
                  label={checkBox.labelFilter}
                />
              </li>
            ))}
          </ul>
        </li>
        <li>
          <NavLink
            to={users.to}
            className={({ isActive }) =>
              isActive
                ? classNames(cls.navLink, cls.navLinkActive)
                : cls.navLink
            }
          >
            {users.labelItem}
          </NavLink>
          <ul
            className={classNames(cls.checkBoxesForUsersWrapper, {
              [cls.checkBoxesWrapperHidden]: pathname !== RoutePath.users,
            })}
          >
            {users.checkBoxes.map((checkBox, index) => (
              <li className={cls.listItem}>
                <CheckBox
                  onToggle={usersCheckBoxesState[index].setValue}
                  status={usersCheckBoxesState[index].value}
                  label={checkBox.labelFilter}
                />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};
