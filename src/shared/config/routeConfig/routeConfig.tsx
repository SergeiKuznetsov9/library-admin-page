import { RouteProps } from "react-router-dom";
import UsersPage from "../../../pages/UsersPage/ui/UsersPage";
import { BooksPage } from "../../../pages/BooksPage";

export enum AppRoutes {
  BOOKS = "books",
  USERS = "users",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.BOOKS]: "/books",
  [AppRoutes.USERS]: "/users",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.BOOKS]: {
    path: RoutePath.books,
    element: <BooksPage />,
  },
  [AppRoutes.USERS]: {
    path: RoutePath.users,
    element: <UsersPage />,
  },
};
