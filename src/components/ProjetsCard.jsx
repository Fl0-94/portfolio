import PropTypes from 'prop-types';
import Tech from "./Tech";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjetCard({ capture, icon, title, date, text, techno, liked, githubLink, liveLink }) {
  if (!liked) return null;

  return (
    <div className="bg-bg-card p-px border-2 border-border-colors/50 flex flex-col justify-center items-start rounded-2xl group relative shadow-2xl shadow-shadow-nav transition-opacity duration-500 ease-in-out">
      <div className="relative w-[325px] md:w-[450px] h-auto overflow-hidden rounded-t-xl">
        <img
          src={capture}
          alt={"capture d'écran de " + title}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <div className="absolute overflow-y-scroll lg:overflow-hidden inset-0 p-4 flex flex-col justify-start items-start gap-2 md:gap-4 bg-bg-card text-white text-normal md:text-xl font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p>
                {text}
            </p>
            <div className="flex flex-wrap justify-start items-start gap-2">
                {techno.map((tech, index) => (
                    <Tech key={index}>
                        {tech}
                    </Tech>
                ))}
            </div>
            <div className="flex justify-start items-center gap-4">
                {githubLink && (
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-base bg-[#1C1524]/50 hover:bg-[#2D1C3D] px-3 py-2 md:px-6 md:py-3 rounded-lg border border-border-colors flex justify-center items-center gap-2"
                >
                    <FaGithub />
                    Github
                </a>
                )}
                {liveLink && (
                <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-base bg-btn-purple hover:bg-[#8E4EC6]/80 px-3 py-2 md:px-6 md:py-3 rounded-lg flex justify-center items-center gap-2"
                >
                    Live demo
                    <FaExternalLinkAlt />
                </a>
                )}
            </div>
        </div>
      </div>
      <div className="p-3 md:p-4 flex justify-start items-center gap-2">
        <p className="text-3xl text-btn-purple">
          {icon}
        </p>
        <p className="text-white text-xl md:text-2xl font-semibold">
            {title}
        </p>
        <Tech>
            {date}
        </Tech>
      </div>
    </div>
  );
}

ProjetCard.propTypes = {
  capture: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  techno: PropTypes.arrayOf(PropTypes.string).isRequired,
  liked: PropTypes.bool.isRequired,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
};
