import PropTypes from 'prop-types';

export default function Competences({ logo, name }) {
  return (
    <div className="h-28 w-32 lg:h-44 lg:w-52 p-6 lg:p-8 bg-[#1C1524]/60 flex flex-col justify-center items-center gap-2 border-2 border-[#393A40]/50 rounded-xl transition duration-300 ease-out hover:bg-[#1C1524] hover:translate-y-[-8px] shadow-lg hover:shadow-[#1C1524]">
      <div className="text-[#B2B3BD] text-5xl lg:text-7xl">
        {logo}
      </div>
      <p className="text-[#B2B3BD] text-xs lg:text-sm">
        {name}
      </p>
    </div>
  );
}

Competences.propTypes = {
  logo: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
};
