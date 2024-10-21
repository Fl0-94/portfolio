import { BsFillMortarboardFill } from "react-icons/bs";
import Formation from "./Formation";

export default function AboutFormation() {

    const FORMATIONS = [
        {
            year: "2023 - 2025",
            title: "Bachelor Coding et Digital Innovation",
            text: "Formation approfondie en développement web. Cette formation couvre les fondamentaux du développement web, ainsi que des techniques avancées pour créer des applications web modernes et performantes.",
            tech: [
                "HTML",
                "CSS",
                "Javascript",
                "React",
                "PHP",
                "POO",
                "Python",
                "SQL",
                "Node.js",
                "Docker",
                "Figma",
                "Gestion de projet",
            ],
        },
    ];

  return (
    <div className="flex flex-col gap-5">
        <h2 className="text-white text-2xl lg:text-4xl font-semibold flex items-center gap-3">
            <BsFillMortarboardFill />
            Formation
        </h2>
        <div className="w-20 h-1 bg-white"></div>

        {FORMATIONS.map((formation, index) => (
            <Formation
                key={index}
                year={formation.year}
                title={formation.title}
                text={formation.text}
                tech={formation.tech}
            />
        ))}
    </div>
  )
}
