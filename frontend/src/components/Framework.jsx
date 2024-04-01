// import React from 'react';
import FrameworkLayer from '../components/cards/FrameLayer';
import "../styles/frame.css"

// function EducationalFramework() {
//     

//     return (
//         <div className="educational-framework">
//             {layers.map(layer => (
//                 <FrameworkLayer key={layer.id} id={layer.id} title={layer.title} activities={layer.activities} />
//             ))}
//         </div>
//     );
// }

// export default EducationalFramework;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import FrameworkLayer from './FrameworkLayer';

function EducationalFramework() {

    const isMobile = () => {
        return window.innerWidth <= 768; // Adjust the breakpoint as per your requirement
    };

    const layers = [
        {
            id: 1,
            title: 'Annamaya Kosha',
            enTitle: '(Physical Layer)',
            activities: ['Aerobics', 'Yoga', 'Dance', 'Gymnastics', 'Gross Motor Skills', 'Water activities', 'Age specific balanced activities'],
        },
        {
            id: 2,
            title: 'Pranamaya Kosha',
            enTitle: '(Life force energy Layer)',
            activities: ['Showing Gratitude', 'Self-awareness skills', 'Environment awareness skills', 'Appreciation', 'Mental Yoga'],
        },
        {
            id: 3,
            title: 'Manomaya Kosha',
            enTitle: '(Mind Layer)',
            activities: ['Neon light play', 'A.V. learning', 'Story-telling', 'Maths logic', 'Socio-economic development', 'English foundation', 'Craft/Drawing'],
        },
        {
            id: 4,
            title: 'Vijnamaya Kosha',
            enTitle: '(Intellectual Layer)',
            activities: ['Creativity & Imagination', 'Observation', 'Logical reasoning', 'Synthesis', 'Experimentation', 'Analytical ability', 'Linguistic skills', 'Abstract and divergent thinking'],
        },
        {
            id: 5,
            title: 'Anandamaya Kosha',
            enTitle: '(Inner Self Layer)',
            activities: ['Generalisation', 'Emotional balance', 'Understanding through experience', 'Spiritual Development', 'Aesthetic sense', 'Spontaneity', 'Freedom', 'Happiness', 'Love & Passion'],
        },
    ];

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
        <div className="parallax-frame">
        <div className="educational-framework">
            <div className="heading">
                <div className="frame-title">
                    <h1>Educational Framework</h1>
                </div>
                <div className="frame-subtitle">
                    <p>GNV INTERNATIONAL follows FIVE-FOLD DEVELOPMENT APPROACH in the educational framework. It includes five layers of development of a child in their early age. These five layers are :
                    </p>
                </div>
            </div>
            <div className="frame-cards">
                {isMobile() ? <Slider />: null}
            {layers.map(layer => (
                <FrameworkLayer key={layer.id} title={layer.title} enTitle={layer.enTitle} activities={layer.activities} />
            ))}
            </div>
        </div>
        </div>
    );
}

export default EducationalFramework;

