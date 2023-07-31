import { FC, InputHTMLAttributes } from "react";
import classNames from "classnames";
import cls from "./CheckBox.module.scss";

type CheckBoxProps = InputHTMLAttributes<HTMLInputElement> & {
  classNameForContainer?: string;
  classNameForLabel?: string;
  classNameForInput?: string;
  label?: string;
  onToggle: () => void;
  status: boolean;
};

export const CheckBox: FC<CheckBoxProps> = ({
  classNameForContainer,
  classNameForLabel,
  classNameForInput,
  label = "",
  onToggle,
  status,
  ...otherProps
}) => (
  <label className={classNames(cls.CheckBoxContainer, classNameForLabel)}>
    <input
      type="checkbox"
      className={cls.CheckBoxInput}
      checked={status}
      onChange={onToggle}
      {...otherProps}
    />
    <span className={classNames(cls.CheckBoxLabel, classNameForLabel)}>
      {label}
    </span>
  </label>
);
