import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/hero.css'; // Import your custom CSS for styling

const Hero = () => {
    // Sample image URLs and corresponding links for the carousel
    const slides = [
        {
            imageUrl: 'https://www.vibgyorkids.com/public/uploads/banners/1693202223-BANNER.jpg',
            link: 'https://example.com/page1',
        },
        {
            imageUrl: 'https://www.vibgyorkids.com/public/uploads/banners/1693202223-BANNER.jpg',
            link: 'https://example.com/page2',
        },
        {
            imageUrl: 'https://www.vibgyorkids.com/public/uploads/banners/1693202223-BANNER.jpg',
            link: 'https://example.com/page3',
        },
        // Add more slides as needed
    ];

    // Settings for the carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <a href={slide.link} target="_blank" rel="noopener noreferrer">
                            <img src={slide.imageUrl} alt={`Slide ${index + 1}`} className="carousel-image" />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Hero;
