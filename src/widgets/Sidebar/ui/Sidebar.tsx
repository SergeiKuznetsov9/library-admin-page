import classNames from "classnames";
import { FC } from "react";
import cls from "./Sidebar.module.scss";
import { Navigation } from "../../../shared/ui/Navigation";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  return (
    <div className={classNames(className, cls.Sidebar)}>
      <Navigation />
    </div>
  );
};
