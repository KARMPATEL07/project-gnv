import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/offering.css'; // Import your custom CSS for styling

import fire from "../../assets/fire.jpg"
import tech from "../../assets/tech.jpg"
import parent from "../../assets/parental.jpg"
import fiveFolded from "../../assets/fiveFolded.jpg"
import infra from "../../assets/infra.jpg"
import lang from "../../assets/lang.jpg"
import tour from "../../assets/tour.jpg"
import well from "../../assets/well.jpg"
import culture from "../../assets/culture.jpg"
import safe from "../../assets/safe.jpg"

const Carousel = () => {
  // Sample data for carousel cards
  const cardData = [
    {
      id: 1,
      title: 'Five-Fold Development Approach',
      image: fiveFolded,
      link: 'https://example.com/card1', // URL for "Learn More" button
    },
    {
      id: 2,
      title: 'Advanced Infrastructure',
      image: infra,
      link: 'https://example.com/card2',
    },
    {
      id: 3,
      title: 'Fire Safety & CCTV Enabled Premises',
      image: fire,
      link: 'https://example.com/card3',
    },
    {
      id: 4,
      title: 'Tech-Infused Learning',
      image: tech,
      link: 'https://example.com/card3',
    },
    {
      id: 5,
      title: 'Cultural Literacy',
      image: culture,
      link: 'https://example.com/card3',
    },
    {
      id: 6,
      title: 'Safe and Secure Transit',
      image: safe,
      link: 'https://example.com/card3',
    },
    {
      id: 7,
      title: 'Parental Engagement',
      image: parent,
      link: 'https://example.com/card3',
    },
    {
      id: 8,
      title: 'Multi Lingualism',
      image: lang,
      link: 'https://example.com/card3',
    },
    {
      id: 9,
      title: 'Study Tour',
      image: tour,
      link: 'https://example.com/card3',
    },
    {
      id: 10,
      title: 'Wellness & Physical Hygiene',
      image: well,
      link: 'https://example.com/card3',
    },

  ];

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h1>Why GNV?</h1>
      <Slider {...settings}>
        {cardData.map((card) => (
          <div key={card.id} className="carousel-card">
            <img src={card.image} alt={card.title} className='offer-img'/>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            {/* <a href={card.link} target="_blank" rel="noopener noreferrer" className="learn-more-button">
              <i className="fas fa-arrow-circle-right"></i>
            </a> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
