import classNames from "classnames";
import { ReactComponent as IconSearch } from "../assets/icon-search.svg";
import { ReactComponent as IconSearchColor } from "../assets/icon-search-color.svg";
import { ReactComponent as IconClose } from "../assets/icon-close.svg";

import iconClosse from "../assets/icon-close.svg";

import cls from "./SearchingInput.module.scss";
import { FC, useRef, useState } from "react";
import { Button } from "../../../../shared/ui/Button/ui/Button";

interface SearchProps {
  className?: string;
  hideSorting: () => void;
  showSorting: () => void;
}

export const SearchingInput: FC<SearchProps> = ({
  hideSorting,
  showSorting,
}) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState<boolean>(false);
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
          <IconSearch />
        </Button>
      )}
      <div
        className={classNames(cls.container, "displayNoneOn584")}
        ref={inputContainerRef}
      >
        <input
          className={cls.input}
          placeholder="Поиск книги или автора…"
          // value={value}
          // onChange={handleChange}
        />
        <IconSearch className={cls.iconSearch} />
        <IconSearchColor className={cls.iconSearchColor} />
        <Button className={cls.closeButton} onClick={onCloseSearching}>
          <IconClose />
          <img src={iconClosse} alt="close" />
        </Button>
      </div>
    </>
  );
};
