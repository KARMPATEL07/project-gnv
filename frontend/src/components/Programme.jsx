import React from 'react'
import Card from "../components/cards/SchoolType"
import ps from "../assets/ps.jpg"
import nsr from "../assets/nsr.jpg"
import jkg from "../assets/jkg.jpg"
import skg from "../assets/skg.jpg"
import dc from "../assets/dc.jpg"

import "../styles/programme.css"

const Programme = () => {

    const layers = [
        {
            photo: nsr,
                title:"Play Group",
                bulletPoints:['1.5 - 3 yrs', '2.5 hrs daily', '5 days per week'],
                learnMoreLink:"/learn-more",
        },
        {
            photo: ps,
            title: "Class Activity Dome",
            bulletPoints: ['2 -3  yrs', '3 hrs daily', '5 days per week'],
            learnMoreLink: "/learn-more",
        },
        {
            photo: jkg,
            title: "Nursery",
            bulletPoints: ['3 - 4 yrs', '3.5 hrs daily', '5 days per week'],
            learnMoreLink: "/learn-more",
        },
        {
            photo: skg,
            title: "Junior Kg",
            bulletPoints: ['4 -5 yrs', '4.5 hrs daily', '5 days per week'],
            learnMoreLink: "/learn-more",
        },
        {
            photo: dc,
            title: "Senior Group",
            bulletPoints: ['5 -6 yrs onwards', '4.5 hrs daily', '5 days per week'],
            learnMoreLink: "/learn-more",
        },        
    ];

    return (
        <div className='container'>
            <h1>Programme Offered</h1>
            {/* <div className="cardss">
                <Card
                    photo={nsr}
                    title="Play Group"
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
            </div> */}
            <div className="cardss">
                {layers.map(layer => (
                    <Card key={layer.id} photo={layer.photo} title={layer.title} bulletPoints={layer.bulletPoints} learnMoreLink={layer.learnMoreLink} />
                ))}

            </div>
        </div>
    )
}

export default Programme