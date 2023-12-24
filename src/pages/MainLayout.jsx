import Navigation from "./Navigation";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = (props) => {
  return (
    <>
      <Navigation></Navigation>
      <Outlet></Outlet>
     
    </>
  );
};

export default MainLayout;
