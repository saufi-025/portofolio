import { FaBars } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Home } from "./home";
import { Rect } from "./react";
import { Javascript } from "./javascript";
import { Next } from "./next";
import { Tailwind } from "./tailwind";
import { Expres } from "./express";
import { Jquery } from "./jquery";
import { Node } from "./node";
const style = {
  nav: "bg-gradient-to-r from-fuchsia-950 to-sky-900 p-5",
  ul: "list-none max-w-7xs mx-auto flex justify-start items-center relative",
  li: "flex space-x-4 gap-8",
  bars: "mr-10 text-2xl text-white",
  logo: "bg-gradient-to-r from-red-500 to-blue-700 bg-clip-text text-transparent text-2xl uppercase mr-16 relative",
  active:
    "block text-gray-500 px-1 py-1 rounded-md text-xl font-medium capitalize",
  unactive:
    "block text-white hover:text-gray-500 px-1 py-1 rounded-md text-xl font-medium capitalize",
};
export function Nav() {
  return (
    <Router>
      <nav className={style.nav}>
        <ul className={style.ul}>
          <FaBars className={style.bars} />
          <li className={style.logo}>portofolio</li>
          <li className={style.li}>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? style.active : style.unactive
              }
            >
              home
            </NavLink>
            <NavLink
              to="/javascript"
              className={({ isActive }) =>
                isActive ? style.active : style.unactive
              }
            >
              javascript
            </NavLink>
            <NavLink
              to="/express"
              className={({ isActive }) =>
                isActive ? style.active : style.unactive
              }
            >
              express
            </NavLink>
            <NavLink
              to="/jquery"
              className={({ isActive }) =>
                isActive ? style.active : style.unactive
              }
            >
              jQuery
            </NavLink>
            <NavLink
              to="/react"
              className={({ isActive }) =>
                isActive ? style.active : style.unactive
              }
            >
              react
            </NavLink>
            <NavLink
              to="/next"
              className={({ isActive }) =>
                isActive ? style.active : style.unactive
              }
            >
              next js
            </NavLink>
            <NavLink
              to="/node"
              className={({ isActive }) =>
                isActive ? style.active : style.unactive
              }
            >
              node js
            </NavLink>
            <NavLink
              to="/tailwind"
              className={({ isActive }) =>
                isActive ? style.active : style.unactive
              }
            >
              tailwind
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/express" element={<Expres />} />
        <Route path="/jquery" element={<Jquery />} />
        <Route path="/react" element={<Rect />} />
        <Route path="/next" element={<Next />} />
        <Route path="/node" element={<Node />} />
        <Route path="/tailwind" element={<Tailwind />} />
      </Routes>
    </Router>
  );
}
