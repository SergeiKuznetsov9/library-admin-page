import { AppRouter } from "./router";
import { Sidebar } from "../widgets/Sidebar/ui/Sidebar";
import { Header } from "../widgets/Header";
import { Footer } from "../widgets/Footer";
import cls from "./App.module.scss";
import "./styles/index.scss";

export function App() {
  return (
    <>
      <Header />
      <div className={cls.App}>
        <Sidebar />
        <AppRouter />
      </div>
      <Footer />
    </>
  );
}
