import { FC, useRef, useState } from "react";
import classNames from "classnames";
import { Button } from "../../../../shared/ui/Button";
import iconSearch from "../assets/icon-search.svg";
import iconSearchColor from "../assets/icon-search-color.svg";
import iconClose from "../assets/icon-close.svg";
import cls from "./SearchingInput.module.scss";

type SearchProps = {
  className?: string;
  hideSorting: () => void;
  showSorting: () => void;
}

export const SearchingInput: FC<SearchProps> = ({
  hideSorting,
  showSorting,
}) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const inputContainerRef = useRef<HTMLDivElement | null>(null);

  const onOpenSearching = () => {
    inputContainerRef.current?.classList.remove("displayNoneOn584");
    setIsSearchExpanded(true);
    hideSorting();
  };

  const onCloseSearching = () => {
    inputContainerRef.current?.classList.add("displayNoneOn584");
    setIsSearchExpanded(false);
    showSorting();
  };

  return (
    <>
      {!isSearchExpanded && (
        <Button
          view="filter"
          className={classNames(cls.mobileButton)}
          onClick={onOpenSearching}
        >
          <img src={iconSearch} alt="close" />
        </Button>
      )}
      <div
        className={classNames(cls.container, "displayNoneOn584")}
        ref={inputContainerRef}
      >
        <input
          className={cls.input}
          placeholder="Поиск книги или автора…"
        />
        <img src={iconSearch} alt="close" className={cls.iconSearch} />
        <img
          src={iconSearchColor}
          alt="close"
          className={cls.iconSearchColor}
        />
        <Button className={cls.closeButton} onClick={onCloseSearching}>
          <img src={iconClose} alt="close" />
        </Button>
      </div>
    </>
  );
};
