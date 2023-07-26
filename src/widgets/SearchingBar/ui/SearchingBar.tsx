import { SortingButton } from "../../../shared/ui/SortingButton";
import { SearchingInput } from "../../../shared/ui/SearchingInput";
import cls from "./SearchingBar.module.scss";
import { FC, useRef } from "react";

interface SearchingBarProps {
  className?: string;
  /*   hideOtherControlsForSearching: () => void;
  showOtherControlsForSearching: () => void; */
}

export const SearchingBar: FC<SearchingBarProps> = () => {
  const sortingButton = useRef<HTMLDivElement | null>(null);

  const hideSorting = () => {
    sortingButton.current?.classList.add("displayNoneOn584");
  };

  const showSorting = () => {
    sortingButton.current?.classList.remove("displayNoneOn584");
  };

  return (
    <div className={cls.SearchingBar}>
      <SearchingInput hideSorting={hideSorting} showSorting={showSorting} />
      <div ref={sortingButton}>
        <SortingButton />
      </div>
    </div>
  );
};
