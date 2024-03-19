import { BsCart3, BsSunFill, BsMoonFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const themes = { winter: "winter", dracula: "dracula" };

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.winter;
};
const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const handleTheme = () => {
    const { dracula, winter } = themes;
    const newTheme = theme === winter ? dracula : winter;

    setTheme(newTheme);
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink to="/">
            <h1 className="text-3xl font-bold">
              <span className="hidden lg:flex btn btn-primary text-3xl">C</span>
            </h1>
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow z-[1] rounded-box w-52 bg-base-200"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <BsSunFill className="w-4 h-4 swap-on" />
            <BsMoonFill className="w-4 h-4 swap-off" />
          </label>
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm indicator-item badge-primary">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
