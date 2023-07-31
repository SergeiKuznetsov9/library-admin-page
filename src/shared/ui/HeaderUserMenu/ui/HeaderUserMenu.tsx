import { FC } from "react";
import cls from "./HeaderUserMenu.module.scss";
import avatar from "../assets/avatar.png";
import classNames from "classnames";
import { UserMenu } from "../../../../shared/ui/UserMenu";

interface HeaderUserMenuProps {
  className?: string;
}

export const HeaderUserMenu: FC<HeaderUserMenuProps> = ({ className }) => {
  return (
    <div className={classNames(cls.HeaderUserMenu, className)}>
      <div className={cls.greetingBlock}>
        <span className={cls.greeting}>Привет, Иван</span>
        <img src={avatar} alt="avatar" />
      </div>

      <div className={cls.popUp}>
        <UserMenu />
      </div>
    </div>
  );
};
