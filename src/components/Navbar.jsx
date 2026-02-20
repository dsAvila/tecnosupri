import React from "react";
import { NavbarMenu } from "../data/navigation";
import Logo from "../assets/images/logo.svg";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          <div className="flex items-center">
            <a href="/">
              <img
                src={Logo}
                alt="Tecnosupri"
                className="h-5 md:h-8 w-auto object-contain"
              />
            </a>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-primary font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>

      <ResponsiveMenu open={open}/>
    </>
  );
};

export default Navbar;
