import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const navLinks = [
  { to: "/assignment", label: "Home" },
  { to: "/assignment/about", label: "About" },
  { to: "/assignment/contact", label: "Contact" },
  { to: "/assignment/assignment", label: "Assignment" },
];

export default function AssignmentLayout() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div>
      <header className="bg-blue-600 p-4 text-center text-white">
        <h1 className="text-2xl font-bold">Assignment Website</h1>
      </header>
      <nav className="flex justify-center space-x-4 bg-gray-200 p-4 text-center">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={` ${pathname === link.to ? "font-bold text-blue-600" : "font-normal text-slate-700"}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
