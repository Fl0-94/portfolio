import PropTypes from 'prop-types';
import Tech from './Tech';

export default function Formation({ year, title, text, tech }) {
    return (
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="lg:w-1/4">
            <p className="text-gray text-normal">
                {year}
            </p>
        </div>
        <div className="lg:w-3/4 flex flex-col gap-3">
            <h3 className="text-white text-2xl font-semibold">
                {title}
            </h3>
            <p className="text-gray text-normal">
                {text}
            </p>
            <div className="flex flex-wrap gap-3">
                {tech.map((techItem, index) => (
                    <Tech
                        key={index}
                        className="text-white text-sm bg-gray-700 py-1 px-3 rounded-full"
                    >
                        {techItem}
                    </Tech>
                ))}
            </div>
        </div>
      </div>
    );
}

Formation.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
};
