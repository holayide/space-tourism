import { NavLink } from "react-router-dom";
import { navLinks } from "./data";

export default function NavItem() {
  return (
    <ul className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 text-white">
      {navLinks.map((link) => (
        <li key={link.href} className="w-full md:w-auto">
          <NavLink
            to={link.href}
            className="flex md:py-8 border-b-[3px] border-transparent hover:border-white transition-all ease-out tracking-widest"
          >
            <span className="mr-3 font-bold">{link.id}</span>
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
