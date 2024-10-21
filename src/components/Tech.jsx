import PropTypes from 'prop-types';

export default function Tech({ children }) {
  return (
    <p className="text-white text-sm bg-bg-tech/10 py-1 px-3 rounded-full">
      {children}
    </p>
  );
}

Tech.propTypes = {
  children: PropTypes.node.isRequired,
};
