import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
// components
import MainPageAsync from "./pages/main-page/main-page.async";
import AboutPageAsync from "./pages/about-page/about-page.async";
// styles
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={"/"}>Головна</Link>
      <Link to={"/about"}>J сайті</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
