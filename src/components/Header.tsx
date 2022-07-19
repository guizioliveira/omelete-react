import logo from "../assets/omelete_logo.svg";
import {
  Search,
  ScFacebook,
  ScInstagram,
  ScTwitter,
  ScYoutube
} from "@styled-icons/evil";
export function Header() {
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
  return (
    <header className=" bg-gradient-to-b from-black to-[#2d2d2d]">
      <div className="container w-full mx-auto justify-between px-4 gap-3 items-center flex h-[85px]">
        <div className="w-full flex items-center">
          <a href="#">
            <img src={logo} className="h-9" alt="Omelete Logo" />
          </a>
          <ul className="flex w-full justify-center text-white gap-[14px]">
            {links.map((link, index) => (
              <li
                className="inline-block border-b-2 border-primary"
                key={index}
              >
                <a
                  className="font-uni italic text-[13px] tracking-[1.4px] hover:text-primary transition-colors"
                  href={link.url}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-5">
          <button type="button" className="py-2 text-white hover:text-primary">
            <Search className="w-9 h-9" />
          </button>
          <div className="border-l border-[#333]"></div>
          <div className="flex items-center gap-2">
            <a href="#" className="text-[#4a4a4a] hover:text-primary">
              <ScFacebook size={28} />
            </a>
            <a href="#" className="text-[#4a4a4a] hover:text-primary">
              <ScInstagram size={28} />
            </a>
            <a href="#" className="text-[#4a4a4a] hover:text-primary">
              <ScTwitter size={28} />
            </a>
            <a href="#" className="text-[#4a4a4a] hover:text-primary">
              <ScYoutube size={28} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
