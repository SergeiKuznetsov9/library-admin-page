import { FC, useState } from "react";
import cls from "./SortingButton.module.scss";
import { Button } from "../../../../shared/ui/Button/ui/Button";
import { ReactComponent as SortAsc } from "../assets/sort-asc.svg";
import { ReactComponent as SortDesc } from "../assets/sort-desc.svg";

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
            <SortAsc />
          </>
        ) : (
          <>
            <span className={cls.labelText}>Сортировка от Я до А</span>
            <SortDesc />
          </>
        )}
      </div>
    </Button>
  );
};
