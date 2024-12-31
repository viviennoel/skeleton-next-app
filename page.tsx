'use client';

import { useEffect, useState } from 'react';
import styles from './styles/Home.module.css';

export default function Home() {
  const [sloganVisible, setSloganVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSloganVisible(true);
    }, 300); // Show the slogan after 500ms
  }, []);

  const slogan = "L'Excellence dans Chaque Fibre";
  const letters = slogan.split('').map((letter, index) => ({
    letter: letter === ' ' ? '\u00A0' : letter, // Replace spaces with non-breaking spaces
    delay: index * 30, // Adjust the delay for animation
  }));

  return (
    <div className={styles.container}>
      {/* Big Cover */}
      <section className={styles.cover}>
        <div
          className={`${styles.slogan} ${sloganVisible ? styles.visible : ''}`}
        >
          {letters.map((item, index) => (
            <span
              key={index}
              className={styles.letter}
              style={{ '--delay': `${item.delay}ms` }} // Pass the delay as a CSS variable
            >
              {item.letter}
            </span>
          ))}
        </div>
      </section>

      {/* Cards Section */}
      <div className={styles.sectionContainer}>
        <section className={styles.cardsSection}>
          <h1
            className='mb-5 mt-1 text-center'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-easing='ease'
            data-aos-duration='1000'
          >
            Nos Produits
          </h1>
          <div className={`${styles.cards} grid`}>
            {[
              {
                title: 'Handmade Carpets',
                description: 'Exquisite designs crafted by artisans.',
                delay: 0,
              },
              {
                title: 'Modern Carpets',
                description: 'Fusing tradition with contemporary styles.',
                delay: 100,
              },
              {
                title: 'Custom Orders',
                description: 'Create your own perfect carpet.',
                delay: 200,
              },
            ].map((card, index) => (
              <div
                className={`${styles.card} ${
                  styles[`card-${index + 1}`]
                } g-col-6 g-col-md-4`}
                key={index}
                data-aos='fade-up'
                data-aos-anchor-placement='center-bottom'
                data-aos-easing='ease'
                data-aos-duration='1000'
                data-aos-delay={card.delay}
              >
                <div className={styles.cardContent}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.horizontalSection}>
          <h1
            className='mt-1 text-center text-white'
            data-aos='zoom-out-up'
            data-aos-easing='ease'
            data-aos-duration='1000'
          >
            Deux générations de savoir-faire
          </h1>
          <img
            src='https://lesthesdemilie.com/assets/IMAGES/HOME/Separation.png'
            alt='Separation'
            className={`${styles.horizontalSectionDivider} mb-5`}
            data-aos='zoom-out'
            data-aos-easing='ease'
            data-aos-duration='1000'
          />
          <p>
            Depuis deux générations, notre maison incarne l’excellence dans
            l’art du tapis. Chaque pièce de notre collection est minutieusement
            sélectionnée pour son raffinement, son élégance et sa qualité
            exceptionnelle. Forts d’un héritage familial et d’un amour profond
            pour l’artisanat, nous avons su allier tradition et modernité pour
            offrir à notre clientèle des tapis uniques, véritables œuvres d'art,
            qui rehaussent la beauté de chaque intérieur. Chez nous, chaque
            tapis raconte une histoire, tissée à travers le temps et les
            cultures.
          </p>
          <button
            type='button'
            className='btn btn-outline-light mt-5 mb-3'
            data-aos='fade-right'
            data-aos-easing='ease'
            data-aos-duration='1000'
          >
            En savoir plus
          </button>
        </section>

        <section className={`${styles.cardsSection} text-center`}>
          <h1
            className='mt-1 pb-0 text-center'
            data-aos='zoom-out'
            data-aos-easing='ease'
            data-aos-duration='1000'
          >
            Notre expertise
          </h1>
          <img
            src='https://lesthesdemilie.com/assets/IMAGES/HOME/Separation.png'
            alt='Separation'
            className={`${styles.horizontalSectionDivider} mb-5`}
            data-aos='zoom-out'
            data-aos-easing='ease'
            data-aos-duration='1000'
          />
          <div className='container text-center mt-3'>
            <div className='row'>
              <div className='col'>
                <div
                  id='carouselExample'
                  className={`${styles.carousel} carousel slide h-100`}
                  data-aos='fade'
                  data-aos-anchor-placement='center-bottom'
                  data-aos-easing='ease'
                  data-aos-duration='1000'
                >
                  <div className='carousel-inner h-100'>
                    <div className='carousel-item active h-100'>
                      <div className={styles.carousel1}></div>
                    </div>
                    <div className='carousel-item h-100'>
                      <div className={styles.carousel2}></div>
                    </div>
                    <div className='carousel-item h-100'>
                      <div className={styles.carousel3}></div>
                    </div>
                  </div>
                  <button
                    className='carousel-control-prev'
                    type='button'
                    data-bs-target='#carouselExample'
                    data-bs-slide='prev'
                  >
                    <span
                      className='carousel-control-prev-icon'
                      aria-hidden='true'
                    ></span>
                    <span className='visually-hidden'>Previous</span>
                  </button>
                  <button
                    className='carousel-control-next'
                    type='button'
                    data-bs-target='#carouselExample'
                    data-bs-slide='next'
                  >
                    <span
                      className='carousel-control-next-icon'
                      aria-hidden='true'
                    ></span>
                    <span className='visually-hidden'>Next</span>
                  </button>
                </div>
              </div>
              <div
                className='col'
                data-aos='fade-right'
                data-aos-anchor-placement='center-bottom'
                data-aos-easing='ease'
                data-aos-duration='1000'
              >
                <h3>Conseils personnalisés</h3>
                <p className='pt-4'>
                  Nos experts vous accompagnent dans le choix du tapis qui
                  sublimera votre intérieur. Nous vous proposons des conseils
                  personnalisés pour vous aider à trouver la pièce parfaite. Que
                  vous soyez à la recherche d’un tapis traditionnel, moderne ou
                  sur-mesure, nous mettons notre expertise à votre service pour
                  vous guider dans votre sélection.
                </p>
                <button
                  type='button'
                  className='btn btn-outline-dark mt-4 mb-3'
                  data-aos='fade-left'
                  data-aos-easing='ease'
                  data-aos-duration='1000'
                >
                  Réserver un créneau
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
