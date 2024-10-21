import { BsStack } from "react-icons/bs";

import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiVite, SiTailwindcss } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { FaSymfony } from "react-icons/fa";

import Competences from './Competences'

export default function AboutTechno() {

    const COMPETENCES = [
        {logo: <FaHtml5 />, name: "HTML"},
        {logo: <FaCss3Alt />, name: "CSS"},
        {logo: <FaJs />, name: "JavaScript"},
        {logo: <FaReact />, name: "React"},
        {logo: <SiVite />, name: "Vite.js"},
        {logo: <FaVuejs />, name: "Vue.js"},
        {logo: <SiTailwindcss />, name: "Tailwind CSS"},
        {logo: <FaSymfony />, name: "Symfony"},
    ];

  return (
    <div className="flex flex-col gap-5">
        <h2 className="text-white text-2xl lg:text-4xl font-semibold flex items-center gap-3">
            <BsStack />
            Technologies préférés
        </h2>
        <div className="w-20 h-1 bg-white"></div>

        <div className="flex flex-wrap justify-center gap-3 lg:gap-6">
            {COMPETENCES.map((competences, index) => (
                <Competences
                    key={index}
                    logo={competences.logo}
                    name={competences.name}
                />
            ))}
        </div>
    </div>
  )
}
