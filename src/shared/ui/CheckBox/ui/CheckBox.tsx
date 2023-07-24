import { FC, InputHTMLAttributes } from "react";
import cls from "./CheckBox.module.scss";
import classNames from "classnames";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  classNameForContainer?: string;
  classNameForLabel?: string;
  classNameForInput?: string;
  label?: string;
  onToggle: () => void;
  status: boolean;
}

export const CheckBox: FC<CheckBoxProps> = ({
  classNameForContainer,
  classNameForLabel,
  classNameForInput,
  label = "",
  onToggle,
  status,
  ...otherProps
}) => {
  return (
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
};
