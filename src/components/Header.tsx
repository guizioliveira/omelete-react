import { useState } from "react";
import logo from "../assets/omelete_logo.svg";
import {
  Search,
  ScFacebook,
  ScInstagram,
  ScTwitter,
  ScYoutube
} from "@styled-icons/evil";
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const links = [
    { title: "FILMES", url: "#" },
    { title: "SÉRIES", url: "#" },
    { title: "HQs", url: "#" },
    { title: "MÚSICA", url: "#" },
    { title: "CCXP", url: "#" },
    { title: "CCXP AWARDS", url: "#" },
    { title: "ANIMES", url: "#" },
    { title: "THE ENEMY", url: "#" }
  ];

  function handleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <header className="bg-gradient-to-b from-black to-[#2d2d2d]">
      <div className="container w-full mx-auto justify-between px-4 gap-3 items-center flex h-[85px]">
        <div className="w-full md:flex hidden">
          <div className="w-full flex items-center">
            <a href="#">
              <img src={logo} className="md:h-8 lg:h-9" alt="Omelete Logo" />
            </a>
            <ul className="flex w-full justify-center text-white md:gap-2 lg:gap-[14px]">
              {links.map((link, index) => (
                <li
                  className="inline-block border-b-2 border-primary"
                  key={index}
                >
                  <a
                    className="font-uni italic lg:text-[13px] md:text-[10px] md:tracking-widest lg:tracking-[1.4px] hover:text-primary transition-colors"
                    href={link.url}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2 lg:gap-5">
            <button
              type="button"
              className="py-2 text-white hover:text-primary"
            >
              <Search className="lg:w-9 lg:h-9 md:w-7 md:h-7" />
            </button>
            <div className="border-l border-[#333]"></div>
            <div className="flex items-center gap-1 lg:gap-2">
              <a
                href="#"
                className="lg:w-7 md:w-6 text-[#4a4a4a] md:hover:text-primary"
              >
                <ScFacebook />
              </a>
              <a
                href="#"
                className="lg:w-7 md:w-6 text-[#4a4a4a] md:hover:text-primary"
              >
                <ScInstagram />
              </a>
              <a
                href="#"
                className="lg:w-7 md:w-6 text-[#4a4a4a] md:hover:text-primary"
              >
                <ScTwitter />
              </a>
              <a
                href="#"
                className="lg:w-7 md:w-6 text-[#4a4a4a] md:hover:text-primary"
              >
                <ScYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:hidden flex flex-col">
          <div className="w-full items-center justify-between flex">
            <button
              className="relative w-8 flex flex-col gap-[5px] h-5 group"
              onClick={handleMobileMenu}
            >
              <div
                className={`w-full h-[3px] top-1/2 left-1/2 absolute rounded-md bg-white md:group-hover:bg-primary transition-all ${
                  isMobileMenuOpen
                    ? "animate-menu-first-line-on"
                    : "animate-menu-first-line-off"
                }`}
              ></div>
              <div
                className={`w-full h-[3px] absolute top-1/2 left-1/2 rounded-md bg-white md:group-hover:bg-primary transition-all ${
                  isMobileMenuOpen
                    ? "animate-menu-second-line-on"
                    : "animate-menu-second-line-off"
                }`}
              ></div>
              <div
                className={`w-full h-[3px] absolute top-1/2 left-1/2 rounded-md bg-white md:group-hover:bg-primary transition-all ${
                  isMobileMenuOpen
                    ? "animate-menu-third-line-on"
                    : "animate-menu-third-line-off"
                }`}
              ></div>
            </button>
            <a href="#">
              <img src={logo} className="h-7" alt="Omelete Logo" />
            </a>
            <button className="text-white md:hover:text-primary w-12">
              <Search />
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden relative flex text-center justify-around items-center h-16 w-full">
        <a
          href="#"
          className="font-uni italic leading-4 text-sm uppercase w-1/3 text-white tracking-widest"
        >
          Destaques
        </a>
        <a
          href="#"
          className="font-uni italic leading-4 text-sm uppercase w-1/3 text-white tracking-widest"
        >
          Últimas Notícias
        </a>
        <a
          href="#"
          className="font-uni italic leading-4 text-sm uppercase w-1/3 text-white tracking-widest"
        >
          Críticas
        </a>
        <div
          className={`absolute w-1/3 bottom-0 h-[2px] left-0 translate-x-0 before:content-[""] transition-transform before:absolute before:left-1/2 before:-translate-x-1/2 before:w-3/4 before:h-[2px] before:bg-primary rounded after:absolute after:content[""] after:left-1/2 after:-translate-x-1/2 after:border-b-primary after:border-x-transparent after:border-t-transparent after:border-[15px] after:bottom-0`}
        ></div>
      </div>
    </header>
  );
}
