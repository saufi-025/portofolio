import "../index.css";
import {FaBars} from "react-icons/fa"
import {NavLink} from 'react-router-dom'
const style = {
  nav:"bg-gradient-to-r from-fuchsia-950 to-sky-900 p-5",
  ul:"list-none max-w-7xs mx-auto flex justify-start items-center relative",
  li: "flex space-x-4 gap-8",
  bars: "mr-10 text-2xl text-white",
  logo: "bg-gradient-to-r from-red-500 to-blue-700 bg-clip-text text-transparent text-2xl uppercase mr-16 relative",
}
export function Nav() {
  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        <FaBars className={style.bars}/>
        <li className={style.logo}>
          portofolio
        </li>
        <li className={style.li}>
            <NavLink
            to='./home.js'
            className={({isActive}) => 
               isActive ? "block text-gray-500 px-1 py-1 rounded-md text-xl font-medium capitalize" : "block text-white hover:text-gray-500 px-1 py-1 rounded-md text-xl font-medium capitalize"
            }>
            home</NavLink>
            <NavLink
            to='./javascript.js' 
            className={({isActive}) => 
               isActive ? "block text-gray-500 px-1 py-1 rounded-md text-xl font-medium capitalize" : "block text-white hover:text-gray-500 px-1 py-1 rounded-md text-xl font-medium capitalize"
            }>
            javascript</NavLink>
            <NavLink
            to='./express.js'
            className={({isActive}) => 
             isActive ? "block text-gray-500 px-1 py-1 rounded-md text-xl font-medium capitalize" : "block text-white hover:text-gray-500 px-1 py-1 rounded-md text-xl font-medium capitalize"
            }>express</NavLink>
            <NavLink
            to='./jquery.js'
            className={({isActive}) => 
             isActive ? "block text-gray-500 px-1 py-1 rounded-md text-xl font-medium capitalize" : "block text-white hover:text-gray-500 px-1 py-1 rounded-md text-xl font-medium capitalize"
            }>jQuery</NavLink>
            <NavLink
            to='./react.js'
            className={({isActive}) => 
             isActive ? "block text-gray-500 px-1 py-1 rounded-md text-xl font-medium capitalize" : "block text-white hover:text-gray-500 px-1 py-1 rounded-md text-xl font-medium capitalize"
            }>react</NavLink>
            <NavLink
            to='./next.js'
            className={({isActive}) => 
             isActive ? "block text-gray-500 px-1 py-1 rounded-md text-xl font-medium capitalize" : "block text-white hover:text-gray-500 px-1 py-1 rounded-md text-xl font-medium capitalize"
            }>next js</NavLink>
            <NavLink
            to='./node.js'
            className={({isActive}) => 
             isActive ? "block text-gray-500 px-1 py-1 rounded-md text-xl font-medium capitalize" : "block text-white hover:text-gray-500 px-1 py-1 rounded-md text-xl font-medium capitalize"
            }>node js</NavLink>
            <NavLink
            to='./tailwind.js'
            className={({isActive}) => 
             isActive ? "block text-gray-500 px-1 py-1 rounded-md text-xl font-medium capitalize" : "block text-white hover:text-gray-500 px-1 py-1 rounded-md text-xl font-medium capitalize"
            }>tailwind</NavLink>
          </li>
      </ul>
    </nav>
  )
}