import PropTypes from 'prop-types';

import { FaLongArrowAltRight } from "react-icons/fa";

export default function ContactCard({ name, link, text, logo }) {
  return (
    <a href={link} target="_blank" className="p-4 bg-[#1C1524]/60 border border-border-colors rounded-md flex justify-start items-center gap-4 max-w-lg mx-auto mb-8 transition duration-300 ease-out hover:bg-[#1C1524] hover:translate-y-[-8px] shadow-lg hover:shadow-[#1C1524]">
      <p className="text-7xl p-4 rounded-full">
        {logo}
      </p>
      <div className="flex flex-col justify-center items-start gap-2">
        <h5 className="text-3xl font-medium">
            {name}
        </h5>
        <p className="flex items-center gap-2">
            {text}
            <FaLongArrowAltRight />
        </p>
      </div>
    </a>
  )
}

ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
};
