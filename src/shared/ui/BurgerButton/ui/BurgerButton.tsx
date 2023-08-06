import { FC } from "react";
import classNames from "classnames";
import cls from "./BurgerButton.module.scss";

type BurgerButtonProps = {
  className?: string;
  isOpened: boolean;
  setIsOpened: () => void;
};

export const BurgerButton: FC<BurgerButtonProps> = ({
  className,
  isOpened,
  setIsOpened,
}) => (
  <button
    className={classNames(className, cls.BurgerButton)}
    onClick={setIsOpened}
    type="button"
  >
    <div
      className={classNames(cls.buttonMenu, isOpened && cls.buttonMenuClose)}
    >
      <hr className={classNames(cls.line, cls.lineFirst)} />
      <hr
        className={classNames(cls.line, cls.lineSecond, {
          [cls.coloredLines]: isOpened,
        })}
      />
      <hr
        className={classNames(cls.line, cls.lineThird, {
          [cls.coloredLines]: isOpened,
        })}
      />
      <hr className={classNames(cls.line, cls.lineFouth)} />
    </div>
  </button>
);
