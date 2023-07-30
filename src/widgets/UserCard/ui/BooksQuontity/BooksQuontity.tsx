import React, { FC } from "react";
import cls from "./BooksQuontity.module.scss";
import { getBooksAmountString } from "../../../../shared/utils/getBooksAmountString";
import classNames from "classnames";
import bookIcon from "../../assets/book_icon.svg";

interface BooksQuontityProps {
  className?: string;
  quontity: number;
}

export const BooksQuontity: FC<BooksQuontityProps> = ({
  className,
  quontity,
}) => {
  return (
    <div className={classNames(className, cls.BooksQuontity)}>
      <img src={bookIcon} alt="bookIcon" />
      {getBooksAmountString(quontity)}
    </div>
  );
};
