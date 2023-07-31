import { FC } from "react";
import classNames from "classnames";
import alarm from "../assets/alarm.svg";
import calendar from "../assets/calendar.svg";
import cls from "./UserLabel.module.scss";

export enum ThemeLabel {
  WARNING = "warning",
  PRIMARY = "primary",
}

type UserLabelProps = {
  className?: string;
  date: string;
  theme: ThemeLabel;
};

export const UserLabel: FC<UserLabelProps> = ({ className, date, theme }) => {
  const defineMark = () => (theme === ThemeLabel.WARNING ? alarm : calendar);

  return (
    <div className={classNames(cls.UserLabel, className, cls[theme])}>
      <img src={defineMark()} alt="mark" className={cls.mark}></img>
      <span>{date}</span>
    </div>
  );
};
