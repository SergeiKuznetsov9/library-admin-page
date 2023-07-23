import { FC } from "react";
import { BurgerButton } from "../../../shared/ui/BurgerButton";
import cls from "./Header.module.scss";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";

interface HeaderProps {
  path?: string;
  userFirstName?: string;
  avatar?: string;
}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className={cls.Header}>
      <img src={logo} alt="biblioland" className={cls.logo} />
      <BurgerButton className={cls.burgerButton} />
      <div className={cls.rightBlock}>
        <h2 className={cls.title}>Администрирование</h2>
        <div className={cls.greetingBlock}>
          <span className={cls.greeting}>Привет, Иван</span>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};
