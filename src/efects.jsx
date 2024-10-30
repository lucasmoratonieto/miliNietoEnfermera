import { useState, useEffect, useRef } from 'react';

function Section({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const top = sectionRef.current.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 1;

      if (top < triggerPoint) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`transition duration-700 transform ${
        isVisible ? 'translate-x-0 translate-y-0 opacity-100' : ' translate-y-36 opacity-0'
      }`}
    >
      {children}
    </section>
  );
}

export default Section;

