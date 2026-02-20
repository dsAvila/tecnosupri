import React from "react";
import { NavbarMenu } from "../data/navigation";
import Logo from "../assets/images/logo.svg";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl flex justify-between items-center py-6 px-6 md:px-12">
          <div className="flex items-center">
            <a href="/">
              <img
                src={Logo}
                alt="Tecnosupri"
                className="h-10 md:h-8 w-auto object-contain"
              />
            </a>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-8 text-gray-600">
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
              <li>
                <a
                  href="#contato"
                  className="bg-primary text-white px-4 py-2 rounded-2xl font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 "
                >
                  Falar com Especialista
                </a>
              </li>
            </ul>
          </div>

          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>

      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
