import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import classNames from "classnames";
import cls from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children?: ReactNode;
  view?: "primary" | "secondary" | "filter" | "ghost";
  type?: JSX.IntrinsicElements["button"]["type"];
};

export const Button: FC<ButtonProps> = ({
  className,
  children,
  view = "ghost",
  type = "button",
  ...otherProps
}: ButtonProps) => (
  <button
    type={type}
    className={classNames(cls[view], className)}
    {...otherProps}
  >
    {children}
  </button>
);
