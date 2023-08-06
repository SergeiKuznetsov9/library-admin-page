type NavigationItemsType = {
  books: NavigationItemType;
  users: NavigationItemType;
};

type NavigationItemType = {
  to: string;
  labelItem: string;
  checkBoxes: NavigationFilterType[];
};

type NavigationFilterType = {
  filter: BooksFilters | UsersFilters;
  labelFilter: string;
};

enum BooksFilters {
  UNSET = "unset",
  BOOKED = "booked",
  ISSUED = "issued",
}

enum UsersFilters {
  UNSET = "unset",
  ALL = "all",
  HOLDERS = "holders",
  LOCKED = "locked",
}

export const NavigationItems: NavigationItemsType = {
  books: {
    to: "/books",
    labelItem: "Книги для брони",
    checkBoxes: [
      {
        filter: BooksFilters.BOOKED,
        labelFilter: "Забронирована",
      },
      {
        filter: BooksFilters.ISSUED,
        labelFilter: "Выдана",
      },
    ],
  },
  users: {
    to: "/users",
    labelItem: "Пользователи",
    checkBoxes: [
      {
        filter: UsersFilters.ALL,
        labelFilter: "Все",
      },
      {
        filter: UsersFilters.HOLDERS,
        labelFilter: "Держатели книг",
      },
      {
        filter: UsersFilters.LOCKED,
        labelFilter: "Заблокированные",
      },
    ],
  },
};
