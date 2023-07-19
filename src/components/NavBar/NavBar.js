import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="elementosNavbar fondoNavbar">
      <div className="center">
      <NavLink to={"/"} > INICIO  </NavLink>
      </div>
      <div className="center clickeables">
        <NavLink to={"/categoria/HOMBRE"}> HOMBRE </NavLink>
        <NavLink to={"/categoria/MUJER"}> MUJER </NavLink>
        <NavLink to={"/categoria/ACCESORIOS"}> ACCESORIOS </NavLink>
      </div>
      <div className="center">
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;
