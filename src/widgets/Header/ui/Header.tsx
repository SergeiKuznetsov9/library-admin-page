import { FC } from "react";
import cls from "./Header.module.scss";
import logo from "../assets/logo.png";
import { MobileNavigationBar } from "../../../widgets/MobileNavigationBar";
import { HeaderUserMenu } from "../../../shared/ui/HeaderUserMenu";

interface HeaderProps {
  path?: string;
  userFirstName?: string;
  avatar?: string;
}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className={cls.Header}>
      <img src={logo} alt="biblioland" className={cls.logo} />
      <MobileNavigationBar className={cls.mobileNavigationBar} />
      <div className={cls.rightBlock}>
        <h2 className={cls.title}>Администрирование</h2>
        <HeaderUserMenu className={cls.headerUserMenu} />
      </div>
    </header>
  );
};
