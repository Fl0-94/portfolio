import { FaGithub, FaFigma, FaTools } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaWordpress } from "react-icons/fa";

import Competences from './Competences'

export default function AboutTools() {

    const OUTILS = [
        {logo: <FaWordpress />, name: "Wordpress"},
        {logo: <FaGithub />, name: "Github"},
        {logo: <VscVscode />, name: "VS Code"},
        {logo: <FaFigma  />, name: "Figma"},
    ];

  return (
    <div className="flex flex-col gap-5">
        <h2 className="text-white text-2xl lg:text-4xl font-semibold flex items-center gap-3">
            <FaTools />
            Outils
        </h2>
        <div className="w-20 h-1 bg-white"></div>

        <div className="flex flex-wrap justify-center gap-3 lg:gap-6">
            {OUTILS.map((outils, index) => (
                <Competences
                    key={index}
                    logo={outils.logo}
                    name={outils.name}
                />
            ))}
        </div>
    </div>
  )
}
