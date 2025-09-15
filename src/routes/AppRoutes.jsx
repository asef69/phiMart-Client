import { Route, Routes } from "react-router";
import About from "../Pages/About";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route index element={<Home />}></Route>
      <Route path="about" element={<About />} /> */}

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;