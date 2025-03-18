import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router";

const navItems = [
  { name: 'About Me', to: '/#about', external: false },
  { name: 'Portfolio', to: '/#portfolio', external: false },
  { name: 'Blog', to: '#', external: false },
  { name: 'Source', to: '#', external: true },
];

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="flex justify-center shadow-md sticky top-0 bg-white">
      <div className="max-w-6xl grow sm:flex gap-10 px-5">
        <Link to="#" className="flex items-center justify-center sm:justify-left font-bold text-lg">
          Joel Alexander Johnston
        </Link>
        <nav className="hidden sm:block">
          <ul className="flex gap-10 py-5 text-lg">
            {navItems.map(item => (
              <li key={item.name}>
                <Link to={item.to}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-center sm:hidden">
          <button className="w-12"
            onClick={() => setShowNav(!showNav)}
          >
            <Bars3Icon />
          </button>
        </div>
        <nav className={`sm:hidden overflow-hidden transition transition-[height] duration-300 ease-in-out ${!showNav ? 'h-0' : 'h-56'}`}>
          <ul className="flex flex-col items-center gap-5 py-5 text-lg">
            {navItems.map(item => (
              <li key={item.name}>
                <Link to={item.to}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}