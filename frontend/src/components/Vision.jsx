import React from "react";
// import Swimmer from "../Assets/whyus.png";
import SolutionStep from "./SolutionStep";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseFloodWater, faGlassWaterDroplet, faWater, faBullseye, faTelevision, faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import "../styles/vision.css";

function About() {
    return (
        <div className="parallax">
            <div className="about-section" id="about">

                {/* <div className="about-image-content">
                <img src="https://thumbs.dreamstime.com/z/happy-school-kids-cartoon-waving-hand-illustration-50839546.jpg" alt="Swimmer Group" className="about-image1" />
            </div> */}
                <div className="about-text-content">
                    <span className="info-card-icon-mis">
                        <FontAwesomeIcon className="info-fa-icon" icon={faBullseye} />
                    </span>
                    <h3 className="about-title">
                        <span>Our Mission</span>
                    </h3>

                    <SolutionStep
                        title="Cultivating a Culture of Trust, Transparency, and Empathy"
                        description="To provide tech-based minimum screen-time knowledge among children with their connectivity to the world."
                    />
                    <SolutionStep
                        title="Equipping Children with Essential Skills"
                        description="We are dedicated to equipped the child with the education, knowledge, critical thinking, creativity, communication and problem-solving skills."
                    />
                    <SolutionStep
                        title="Fostering Learning Techniques with Love and Care"
                        description="To foster our learning techniques among the kids of GNV with utmost love and care. "
                    />
                    <SolutionStep
                        title="Promoting Balanced Lifestyles and Minimizing Screen Time"
                        description="Our goal is to cultivate a culture of trust, transparency and empathy where parents and educators works together to create a nurturing and enriching environment that promotes the growth, happiness and success of every child."
                    />
                </div>

                <div className="about-text-content">
                    <span className="info-card-icon-vis">
                        <FontAwesomeIcon className="info-fa-icon" icon={faEyeLowVision} />
                    </span>
                    <h3 className="about-title">
                        <span>Our Vision</span>
                    </h3>
                    <SolutionStep
                        title="Early Childhood Care and Education (ECCE) for Lifelong Learning"
                        description="To nourish the child at his early age by following Early Childhood Care and Education (ECCE) in providing a strong foundation for life-long learning and development."
                    />

                    <SolutionStep
                        title="Integrating a Holistic Approach to Education"
                        description="To integrate Holistic approach of education by incorporating five layers of development which includes 
                    <span style=background-color:yellow>
                    <b><span style=color:red> Annamaya Kosha (physical layer)</span>, 
                    <span style=color:#FF3EA5>Pranamaya Kosha (life force energy layer)</span> ,
                    <span style=color:purple> Manomaya Kosha (mind layer)</span> , 
                    <span style=color:blue>Vijnamaya Kosha (intellectual layer) </span> and 
                    <span style=color:green>Anandamaya Kosha (inner self)</span> .
                    </span>
                    </b> Each layer exhibits certain distinct characteristics which will help the child to develop for their bright future."
                    />

                    <SolutionStep
                        title="Promoting Balanced Lifestyles and Minimizing Screen Time Dependence"
                        description="We aimed to promote balanced lifestyles and minimize screen time dependence of a child.  Our educators will collaboratively work with families to create screen-free environments that encourages active play, exploration and meaningful connections with the natural world."
                    />


                </div>
            </div>

        </div>
    );
}

export default About;
