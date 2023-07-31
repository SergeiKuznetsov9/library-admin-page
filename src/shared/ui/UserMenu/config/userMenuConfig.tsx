type UserMenuItemsType = {
  profile: NavigationItemType;
  logout: NavigationItemType;
};

type NavigationItemType = {
  to: string;
  labelItem: string;
};

export const UserMenuItems: UserMenuItemsType = {
  profile: {
    to: "/profile",
    labelItem: "Профиль",
  },
  logout: {
    to: "/",
    labelItem: "Выход",
  },
};
