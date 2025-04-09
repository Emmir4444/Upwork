import React, { useRef, useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Si quieres que desaparezca cuando se va, deja esto
        }
      },
      { threshold: 0.3 } // Se activa cuando el 30% del componente está visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`home__main__container ${isVisible ? 'home__main__container--animated' : ''}`}
    >
      <div className="home__main__container__text">
        <h1 className="home__main__container__text__title">Bienvenido a UpWor</h1>
        <p className="home__main__container__text__description">
          Conéctate con miles de empresas y personas alrededor del mundo
        </p>
        <button className="home__main__container__text__button">Comienza ahora</button>
      </div>
      <div className="home__main__container__image">
        <img src="/images/team-meeting-office.jpg" alt="UpWork" />
      </div>
    </section>
  );
};

export default Home;
