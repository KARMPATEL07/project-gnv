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
                <Person name="Name1" position="Director" imageUrl="https://cdn-icons-png.freepik.com/512/4128/4128349.png" />
                <Person name="Name1" position="Director" imageUrl="https://cdn-icons-png.freepik.com/512/4128/4128349.png" />
                <Person name="Name1" position="Director" imageUrl="https://cdn-icons-png.freepik.com/512/4128/4128349.png" />
                <Person name="Name1" position="Director" imageUrl="https://cdn-icons-png.freepik.com/512/4128/4128349.png" />
            </div>
            </div>
        </div>
    );
};

export default Pillars;
