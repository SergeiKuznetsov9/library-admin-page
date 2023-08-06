import { FC } from "react";
import classNames from "classnames";
import { Navigation } from "../../../shared/ui/Navigation";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => (
  <div className={classNames(className, cls.Sidebar)}>
    <Navigation />
  </div>
);
