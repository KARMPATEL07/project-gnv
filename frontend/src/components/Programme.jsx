import React from 'react'
import Card from "../components/cards/SchoolType"
import ps from "../assets/ps.jpg"
import nsr from "../assets/nsr.jpg"
import jkg from "../assets/jkg.jpg"
import skg from "../assets/skg.jpg"
import dc from "../assets/dc.jpg"

import "../styles/programme.css"

const Programme = () => {
    return (
        <div className='container'>
            <h1>Programme Offered</h1>
            <div className="cardss">
            <Card
                photo={nsr}
                title="Nursery"
                bulletPoints={['1.5 yrs onwards', '4 hrs daily', '5 days per week']}
                learnMoreLink="/learn-more"
            />
            <Card
                photo={ps}
                title="Playschool"
                bulletPoints={['2.5 yrs onwards', '4 hrs daily', '5 days per week']}
                learnMoreLink="/learn-more"
            />
            <Card
                photo={jkg}
                title="Junior Kg"
                bulletPoints={['3 yrs onwards', '4 hrs daily', '5 days per week']}
                learnMoreLink="/learn-more"
            />
            <Card
                photo={skg}
                title="Senior Kg"
                bulletPoints={['4 yrs onwards', '4 hrs daily', '5 days per week']}
                learnMoreLink="/learn-more"
            />
            <Card
                photo={dc}
                title="Day Care"
                bulletPoints={['15 yrs onwards', '3,3.5or 7.5 hrs daily', '6 days per week']}
                learnMoreLink="/learn-more"
            />
            </div>
        </div>
    )
}

export default Programme