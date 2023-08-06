import { Navigate, RouteProps } from "react-router-dom";
import UsersPage from "../../../pages/UsersPage/ui/UsersPage";
import { BooksPage } from "../../../pages/BooksPage";

export enum AppRoutes {
  EMPTY = "",
  BOOKS = "books",
  USERS = "users",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.EMPTY]: "/",
  [AppRoutes.BOOKS]: "/books",
  [AppRoutes.USERS]: "/users",
};

const Redirect = <Navigate to="/books" replace={true} state={{ from: "/" }} />;

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.BOOKS]: {
    path: RoutePath.books,
    element: <BooksPage />,
  },
  [AppRoutes.USERS]: {
    path: RoutePath.users,
    element: <UsersPage />,
  },
  [AppRoutes.EMPTY]: {
    path: RoutePath[""],
    element: Redirect,
  },
};
