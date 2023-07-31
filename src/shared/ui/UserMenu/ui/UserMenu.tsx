import { FC } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { UserMenuItems } from "../config/userMenuConfig";
import cls from "./UserMenu.module.scss";

type UserMenuProps = {
  className?: string;
};

export const UserMenu: FC<UserMenuProps> = () => {
  const { profile, logout } = UserMenuItems;

  return (
    <ul className={cls.UserMenu}>
      <li>
        <NavLink
          to={profile.to}
          className={({ isActive }) =>
            isActive ? classNames(cls.navLink, cls.navLinkActive) : cls.navLink
          }
        >
          {profile.labelItem}
        </NavLink>
      </li>
      <li>
        <NavLink
          to={logout.to}
          className={({ isActive }) =>
            isActive ? classNames(cls.navLink, cls.navLinkActive) : cls.navLink
          }
        >
          {logout.labelItem}
        </NavLink>
      </li>
    </ul>
  );
};
