import React from 'react';
// import './FrameworkLayer.css'; // Import the CSS file for styling

function FrameworkLayer({ title, enTitle, activities }) {
    return (
        <div className="layer">
            <div>
                <h2 className="layer-title">{title}</h2>
                <h3 className="layer-en-title">{enTitle}</h3>
                <ul className="activities-list">
                    {activities.map((activity, index) => (
                        <li key={index} className="activity">{activity}</li>
                    ))}
                </ul>
            </div>
            <div className="layer-footer"></div>
        </div>
    );
}

export default FrameworkLayer;
