import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu } from "../data/navigation";
import React from "react";

const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-2">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id} className="w-full">
                    <a
                      href={item.link}
                      onClick={() => setOpen(false)}
                      className="block w-full text-center py-4 rounded-xl transition-all duration-300
                               hover:bg-white/10 active:bg-white/20 active:scale-95"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
              <li className="w-full">
                <a
                  href="#contato"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center py-4 rounded-xl transition-all duration-300
                               hover:bg-white/10 active:bg-white/20 active:scale-95"
                >
                  Falar com Especialista
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
