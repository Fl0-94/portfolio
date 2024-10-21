import PropTypes from 'prop-types';

export default function HeroRecherche({ isVisible, children }) {
    return (
      <>
        {isVisible ? (
            <div className="flex justify-center items-center gap-2">
                <div className="border-2 border-[#37744E] rounded-full p-[2px]">
                    <div className="w-3 h-3 bg-[#37744E] rounded-full"></div>
                </div>
                <p className="text-[#37744E] text-normal md:text-lg font-semibold text-center">
                    {children}
                </p>
          </div>
        ) : null}
      </>
  );
}

HeroRecherche.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};