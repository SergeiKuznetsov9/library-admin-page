import { FC } from "react";
import { MobileNavigationBar } from "../../../widgets/MobileNavigationBar";
import { HeaderUserMenu } from "../../../shared/ui/HeaderUserMenu";
import logo from "../assets/logo.png";
import cls from "./Header.module.scss";

type HeaderProps = {
  path?: string;
  userFirstName?: string;
  avatar?: string;
};

export const Header: FC<HeaderProps> = () => (
  <header className={cls.Header}>
    <img src={logo} alt="biblioland" className={cls.logo} />
    <MobileNavigationBar className={cls.mobileNavigationBar} />
    <div className={cls.rightBlock}>
      <h2 className={cls.title}>Администрирование</h2>
      <HeaderUserMenu className={cls.headerUserMenu} />
    </div>
  </header>
);
