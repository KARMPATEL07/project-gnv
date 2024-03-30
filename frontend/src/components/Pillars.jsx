import React from 'react'
import Person from "../components/cards/Person.jsx"
import "../styles/pillars.css"

const Pillars = () => {
    return (
        <div className="pillars-container">
            <div className="rounded-box">
                {/* <div className="moving-element">
                    <img src="https://png.pngtree.com/png-clipart/20201020/ourmid/pngtree-running-clipart-bunny-png-image_2371146.jpg" alt="" className="src" />
                </div> */}
            
            <h1 className="pillars-title">Our Pillars</h1>
            {/* <h2 className="pillars-subtitle">A Pioneer of This Dream</h2> */}
            <div className="pillars-content">
                    <Person name="Name1" position="Director" imageUrl="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" />
                    <Person name="Name1" position="Director" imageUrl="https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg" />
                    <Person name="Name1" position="Director" imageUrl="https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg" />
                    <Person name="Name1" position="Director" imageUrl="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" />
            </div>
            </div>
        </div>
    );
};

export default Pillars;
