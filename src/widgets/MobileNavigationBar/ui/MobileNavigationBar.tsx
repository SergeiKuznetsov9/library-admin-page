import { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { BurgerButton } from "../../../shared/ui/BurgerButton";
import { Navigation } from "../../../shared/ui/Navigation";
import { UserMenu } from "../../../shared/ui/UserMenu";
import cls from "./MobileNavigationBar.module.scss";

type MobileNavigationBarProps = {
  className?: string;
};

export const MobileNavigationBar: FC<MobileNavigationBarProps> = ({
  className,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (
        isOpened &&
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setIsOpened?.((isOpened) => !isOpened);

        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener("click", checkIfClickedOutside, true);

    return () =>
      document.removeEventListener("click", checkIfClickedOutside, true);
  }, [isOpened]);

  useEffect(() => {
    const bodyStyle = document.body.style;

    if (isOpened) {
      bodyStyle.position = "fixed";
    } else {
      bodyStyle.position = "static";
      bodyStyle.overflowY = "scroll";
    }
  }, [isOpened]);

  return (
    <div className={classNames(className, cls.MobileNavigationBar)}>
      <BurgerButton
        className={cls.burgerButton}
        isOpened={isOpened}
        setIsOpened={() => setIsOpened((isOpened) => !isOpened)}
      />
      <div
        className={classNames(cls.menu, { [cls.display]: isOpened })}
        ref={dropDownRef}
      >
        <Navigation />
        <hr className={cls.devider} />
        <UserMenu />
      </div>
    </div>
  );
};
