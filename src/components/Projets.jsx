import { useState } from "react";
import ProjetsCard from "./ProjetsCard";
import { GiClick } from "react-icons/gi";

import { RiNextjsFill } from "react-icons/ri";
import { SiVite, SiDjango } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";


export default function Projets() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const CONTENT = [
    {
      capture: "/projets/projet-portfolio.webp",
      icon: <SiVite />,
      title: "Portfolio",
      date: "2024",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum quae illum asperiores, quis perferendis quidem alias.",
      techno: ["Vite.js", "React", "Tailwind CSS", "Gsap"],
      liked: true,
      githubLink: "https://github.com/Alexis-Gontier/Portfolio-v2",
      liveLink: "https://algont-ier.com"
    },
    {
      capture: "/projets/projet-dekuple.webp",
      icon: <RiNextjsFill />,
      title: "Dashboard Dekuple",
      date: "2024",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum quae illum asperiores, quis perferendis quidem alias.",
      techno: ["Next.js", "Supabase", "Chart.js"],
      liked: true,
      githubLink: "https://github.com/Alexis-Gontier/Maquette-SKEAKERS",
      liveLink: ""
    },
    {
      capture: "/projets/projet-old-portfolio.webp",
      icon: <FaHtml5 />,
      title: "Ancien Portfolio",
      date: "2024",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum quae illum asperiores, quis perferendis quidem alias.",
      techno: ["HTML", "CSS", "JavaScript"],
      liked: false,
      githubLink: "https://github.com/Alexis-Gontier/old-portfolio",
      liveLink: "https://alexis-gontier.github.io/MyPortfolio/"
    },
    {
      capture: "/projets/projet-expressway.webp",
      icon: <SiDjango />,
      title: "ExpressWay",
      date: "2024",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum quae illum asperiores, quis perferendis quidem alias.",
      techno: ["Django", "Sqlite", "HTML", "CSS", "Javascript"],
      liked: false,
      githubLink: "https://github.com/Alexis-Gontier/ExpressWay",
      liveLink: ""
    },
    {
      capture: "/projets/projet-page-sneakers.webp",
      icon: <FaHtml5 />,
      title: "Page Sneakers",
      date: "2024",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum quae illum asperiores, quis perferendis quidem alias.",
      techno: ["HTML", "CSS", "Javascript"],
      liked: false,
      githubLink: "https://github.com/Alexis-Gontier/Maquette-SKEAKERS",
      liveLink: ""
    },
  ];

  const handleToggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <div className="flex flex-col justify-start items-center gap-16">
        <div className="flex flex-wrap justify-center items-start gap-8">
            {CONTENT.map((project, index) => (
                <ProjetsCard
                    key={index}
                    capture={project.capture}
                    icon={project.icon}
                    title={project.title}
                    date={project.date}
                    text={project.text}
                    techno={project.techno}
                    liked={project.liked || showAllProjects}
                    githubLink={project.githubLink}
                    liveLink={project.liveLink}
                />
            ))}
        </div>
        <button
            onClick={handleToggleProjects}
            className="text-white text-base bg-btn-purple hover:bg-[#8E4EC6]/80 px-6 py-3 rounded-lg flex justify-center items-center gap-2"
        >
            {showAllProjects ? "Réduire" : "Voir plus de projets"}
            <GiClick />
        </button>
    </div>
  );
}
