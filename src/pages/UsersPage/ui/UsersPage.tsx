import { SearchingBar } from "../../../widgets/SearchingBar";
import { UserCard } from "../../../widgets/UserCard";
import img from "./avatar.jpg";
import cls from "./UsersPage.module.scss";

const UsersPage = () => {
  return (
    <div className={cls.UsersPage}>
      <SearchingBar />

      <ul className={cls.userList}>
        <UserCard
          img={img}
          userName="Чурикова Елена"
          login="ivanov.ivan"
          readedBooks={5}
          regDate="17.04.2021"
          telNumber="+375 (44) 123-12-12"
          status="active"
        />
      </ul>
    </div>
  );
};

export default UsersPage;
