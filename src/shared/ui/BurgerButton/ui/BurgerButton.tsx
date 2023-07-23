import { FC, useState } from "react";
import classNames from "classnames";
import cls from "./BurgerButton.module.scss";

interface BurgerButtonProps {
  className?: string;
}

export const BurgerButton: FC<BurgerButtonProps> = ({ className }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <button
      className={classNames(className, cls.BurgerButton)}
      onClick={() => {
        setIsOpened((isOpened) => !isOpened);
      }}
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
};
