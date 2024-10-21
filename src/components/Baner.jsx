import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';

gsap.registerPlugin(ScrollTrigger);

export default function Baner({ text }) {
  const bannerRef = useRef(null);

  useEffect(() => {
    const element = bannerRef.current;
    const tween = gsap.to(element, {
      xPercent: -25,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      tween.scrollTrigger.kill();
    };
  }, []);

  const renderChildren = (text) => {
    return Array.from({ length: 50 }, (_, i) => (
      <span
        key={i}
        className={`px-3 text-xl ${i % 2 === 0 ? 'text-white' : 'text-banner-purple'}`}
      >
        {text}
      </span>
    ));
  };

  return (
    <div className="bg-[#1C1524] border-y-2 border-border-colors py-2 overflow-hidden">
      <div ref={bannerRef} className="whitespace-nowrap">
        {renderChildren(text)}
      </div>
    </div>
  );
}

Baner.propTypes = {
  text: PropTypes.string.isRequired,
};
