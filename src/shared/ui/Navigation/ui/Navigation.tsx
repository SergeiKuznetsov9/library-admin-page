import { FC, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";
import { CheckBox } from "../../../../shared/ui/CheckBox";
import { RoutePath } from "../../../../shared/config/routeConfig/routeConfig";
import { NavigationItems } from "../config/navigationConfig";
import cls from "./Navigation.module.scss";

type NavigationProps = {
  className?: string;
};

export const Navigation: FC<NavigationProps> = () => {
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
    <ul className={cls.Navigation}>
      <li>
        <NavLink
          to={books.to}
          className={({ isActive }) =>
            isActive ? classNames(cls.navLink, cls.navLinkActive) : cls.navLink
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
            <li className={cls.listItem} key={checkBox.filter}>
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
            isActive ? classNames(cls.navLink, cls.navLinkActive) : cls.navLink
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
            <li className={cls.listItem} key={checkBox.filter}>
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
  );
};
