import PropTypes from 'prop-types';

export default function Btn1({ Link, children }) {
  return (
    <a
      href={Link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-base bg-btn-purple hover:bg-[#3B556D]/80 px-6 py-3 rounded-lg flex justify-center items-center gap-2"
    >
      {children}
    </a>
  );
}

Btn1.propTypes = {
  Link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
