import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
// hooks
import { useTheme } from "app/providers/theme-provider";
// helpers
import { classNames } from "shared/lib/classNames";
// pages
import MainPage from "pages/main-page";
import AboutPage from "pages/about-page";
// styles
import "./styles/index.scss";



const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={"/"}>Головна</Link>
      <Link to={"/about"}>J сайті</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
