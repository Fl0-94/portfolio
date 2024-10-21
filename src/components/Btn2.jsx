import PropTypes from 'prop-types';

export default function Btn2({ Link, children }) {
  return (
    <a
      href={Link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-base bg-[#1C1524]/50 hover:bg-[#2D1C3D] px-6 py-3 rounded-lg border border-border-colors flex justify-center items-center gap-2"
    >
      {children}
    </a>
  );
}

Btn2.propTypes = {
  Link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
