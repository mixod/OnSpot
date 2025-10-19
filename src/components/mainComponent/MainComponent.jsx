import { Outlet } from "react-router-dom";
import Navbar from "../nav/Navbar";
import AppFooter from "../footer/Footer";

function MainComponent() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <AppFooter />
    </div>
  );
}

export default MainComponent;
