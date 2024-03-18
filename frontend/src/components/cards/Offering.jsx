import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/offering.css'; // Import your custom CSS for styling

import dc1 from '../../assets/sfty.jpg'

const Carousel = () => {
  // Sample data for carousel cards
  const cardData = [
    {
      id: 1,
      title: 'Safety',
      image: 'https://images.pexels.com/photos/5561177/pexels-photo-5561177.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://example.com/card1', // URL for "Learn More" button
    },
    {
      id: 2,
      title: 'Expermential Learning',
      image: 'https://images.pexels.com/photos/5561177/pexels-photo-5561177.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://example.com/card2',
    },
    {
      id: 3,
      title: 'Post School Activities',
      image: 'https://images.pexels.com/photos/5561177/pexels-photo-5561177.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://example.com/card3',
    },
    {
      id: 3,
      title: 'Enrichment Programme',
      image: 'https://images.pexels.com/photos/5561177/pexels-photo-5561177.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://example.com/card3',
    },
    {
      id: 3,
      title: 'Day Care (Kids Club)',
      image: 'https://images.pexels.com/photos/5561177/pexels-photo-5561177.jpeg?auto=compress&cs=tinysrgb&w=600',
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
      <h1>What are we offering?</h1>
      <Slider {...settings}>
        {cardData.map((card) => (
          <div key={card.id} className="carousel-card">
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href={card.link} target="_blank" rel="noopener noreferrer" className="learn-more-button">
              <i className="fas fa-arrow-circle-right"></i> {/* Font Awesome icon */}
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
