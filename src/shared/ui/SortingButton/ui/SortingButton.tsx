import { FC, useState } from "react";
import { Button } from "../../../../shared/ui/Button";
import sortAsc from "../assets/sort-asc.svg";
import sortDesc from "../assets/sort-desc.svg";
import cls from "./SortingButton.module.scss";

type SortingButtonProps = {
  className?: string;
};

export const SortingButton: FC<SortingButtonProps> = () => {
  const [ascSort, setAscSort] = useState(true);

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
