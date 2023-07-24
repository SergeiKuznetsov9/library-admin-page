import { FC, InputHTMLAttributes, useState } from "react";
import cls from "./CheckBox.module.scss";
import classNames from "classnames";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  classNameForContainer?: string;
  classNameForLabel?: string;
  classNameForInput?: string;
  label?: string;
  onToggle: () => void;
}

export const CheckBox: FC<CheckBoxProps> = ({
  classNameForContainer,
  classNameForLabel,
  classNameForInput,
  label = "",
  onToggle,
  ...otherProps
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((status) => !status);
    onToggle();
  };

  return (
    <label className={classNames(cls.CheckBoxContainer, classNameForLabel)}>
      <input
        type="checkbox"
        className={cls.CheckBoxInput}
        checked={isChecked}
        onChange={handleCheckboxChange}
        {...otherProps}
      />
      <span className={classNames(cls.CheckBoxLabel, classNameForLabel)}>
        {label}
      </span>
    </label>
  );
};
