import Navbar from "../Shared/Navbar/Navbar";

import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="md:min-h-[calc(100vh-341px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
