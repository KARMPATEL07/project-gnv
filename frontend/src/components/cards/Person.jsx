import React from 'react';
import '../../styles/person.css';

const Person = ({ name, position, imageUrl }) => {
    return (
        <div className="person-container">
            <div className="oval-animation1"></div>
            <div className="oval-animation2"></div>
            <img src={imageUrl} alt={name} className="person-image" />
            <div className="person-details-container">

                <div className="person-details">
                    <div className="p-name">
                        <h2>{name}</h2>
                    </div>
                    <div className="p-position">
                        <p>{position}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Person;
