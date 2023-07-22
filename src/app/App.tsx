import { Link } from "react-router-dom";
import { AppRouter } from "./router";
import "./styles/index.scss";

export function App() {
  return (
    <div>
      <Link to={"/users"}>Пользователи</Link>
      <Link to={"/books"}>Книги</Link>
      <AppRouter />
    </div>
  );
}
