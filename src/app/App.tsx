import { Header } from "../widgets/Header";
import { Sidebar } from "../widgets/Sidebar/ui/Sidebar";
import { AppRouter } from "./router";
import { Footer } from "../widgets/Footer";

import "./styles/index.scss";
import cls from "./App.module.scss";

export const App = () => (
  <>
    <Header />
    <div className={cls.App}>
      <Sidebar />
      <AppRouter />
    </div>
    <Footer />
  </>
);
