import { FC, useState } from "react";
import cls from "./SortingButton.module.scss";
import { Button } from "../../../../shared/ui/Button/ui/Button";
import sortAsc from "../assets/sort-asc.svg";
import sortDesc from "../assets/sort-desc.svg";

interface SortingButtonProps {
  className?: string;
  /*   hideOtherControlsForSearching: () => void;
  showOtherControlsForSearching: () => void; */
}

export const SortingButton: FC<SortingButtonProps> = () => {
  const [ascSort, setAscSort] = useState<boolean>(true);

  return (
    <Button
      view="filter"
      className={cls.SortingButton}
      onClick={() => setAscSort((ascSort) => !ascSort)}
    >
      <div className={cls.label}>
        {ascSort ? (
          <>
            <span className={cls.labelText}>Сортировка от А до Я</span>
            <img src={sortAsc} alt="direct_asc" />
          </>
        ) : (
          <>
            <span className={cls.labelText}>Сортировка от Я до А</span>
            <img src={sortDesc} alt="direct_desc" />
          </>
        )}
      </div>
    </Button>
  );
};
