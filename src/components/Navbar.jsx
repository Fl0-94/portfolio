import { FaGithub } from "react-icons/fa";

export default function Navbar() {

  const LINKS = [
    {
      lien: "#about",
      text: "A Propos"
    },
    {
      lien: "#project",
      text: "Projets"
    },
    {
      lien: "#contact",
      text: "Contact"
    },
  ]

  return (
    <header 
    className="z-50 fixed top-0 left-0 w-full px-[10%] py-2 bg-bg-nav backdrop-blur-sm flex justify-between items-center border-b-2 border-border-colors shadow-xl shadow-shadow-nav"
    style={{
        background: 'rgba(255, 255, 255, 0.25)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        
        border: '1px solid rgba(255, 255, 255, 0.18)'
    }}
>
    <a
        href="/"
        className="hidden text-white text-normal md:text-2xl font-bold md:block"
    >
        Florian Decodts
    </a>
    <a
        href="/"
        className="text-white text-2xl font-bold md:hidden"
    >
        AG
    </a>

    <nav className="flex justify-center items-center gap-5">
        {LINKS.map((link, index) => (
            <a
                key={index}
                href={link.lien}
                className="hidden md:block text-gray font-medium hover:text-[#8E4EC6] hover:translate-y-[-2px] transition duration-300 ease-out"
            >
                {link.text}
            </a>
        ))}
        <div className="w-px h-6 bg-[#B2B3BD] hidden md:block"></div>
        <a
            href="https://github.com/Fl0-94"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl p-2 hover:bg-[#8040B7]/30 rounded-full transition duration-300 ease-out"
        >
            <FaGithub />
        </a>
    </nav>
</header>
  )
}
