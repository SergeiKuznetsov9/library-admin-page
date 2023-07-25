import { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import cls from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  view?: "primary" | "secondary" | "ghost";
  type?: JSX.IntrinsicElements["button"]["type"];
}

export const Button = ({
  className,
  children,
  view = "ghost",
  type = "button",
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={classNames(cls[view], className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
