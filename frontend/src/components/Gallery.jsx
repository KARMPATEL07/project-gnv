import React, { useState, useEffect } from 'react';
import '../styles/gallery.css';

const Gallery = () => {
    const images = [
        'https://thumbs.dreamstime.com/b/happy-children-girls-girlfriend-schoolgirl-student-elementary-school-happy-children-girlfriend-schoolgirl-student-elementary-121447690.jpg',
        'https://static.vecteezy.com/system/resources/previews/005/112/502/non_2x/happy-children-go-to-school-free-vector.jpg',
        'https://i.ytimg.com/vi/SrXOwLiWWz0/maxresdefault.jpg',
        'https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg',
        // Add more image URLs as needed
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div>

        
            <div className="heading">
                <h1>Gallery</h1>
            </div>
            <div className="gallery">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={index === currentImageIndex ? 'active' : ''}
                />
            ))}
        </div>
        </div>
    );
};

export default Gallery;
