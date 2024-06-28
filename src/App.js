import { Nav } from "./components/nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { Rect } from "./components/react";
import { Javascript } from "./components/javascript";
import { Next } from "./components/next";
import { Tailwind } from "./components/tailwind";
import { Expres } from "./components/express";
import { Jquery } from "./components/jquery";
import { Node } from "./components/node";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Javascript />} />
        <Route path='/' element={<Expres />} />
        <Route path='/' element={<Jquery />} />
        <Route path='/' element={<Rect />} />
        <Route path='/' element={<Next />} />
        <Route path='/' element={<Node />} />
        <Route path='/' element={<Tailwind />} />
      </Routes>
    </Router>
  );
}

export default App;
