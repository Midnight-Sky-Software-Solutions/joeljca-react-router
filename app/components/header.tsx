import { Link } from "react-router";

const navItems = [
  { name: 'About Me', to: '/#about', external: false },
  { name: 'Portfolio', to: '/#portfolio', external: false },
  { name: 'Blog', to: '#', external: false },
  { name: 'Source', to: '#', external: true },
];

export default function Header() {
  return (
    <div className="flex justify-center shadow-md sticky top-0 bg-white">
      <div className="max-w-6xl grow flex gap-10">
        <Link to="#" className="flex items-center font-bold text-lg">
          Joel Alexander Johnston
        </Link>
        <nav>
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
      </div>
    </div>
  );
}