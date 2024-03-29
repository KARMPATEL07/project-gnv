import Programme from "./Programme"
import Offering from "./cards/Offering"
import Hero from "./Hero"
import Contact from "./Contact"
import Gallery from "./Gallery"

import "../styles/home.css"
import Pillars from "./Pillars"




const Home = () => {
    // const img1 ="../assets/st-img-1.jpg"
    return (
        <div className="home">
            <Hero />
            <h1>Welcome to GNV International!</h1>
            <p>Empowering students to create a brighter future.</p>
            <div className="home-content">
                <Programme />
                <Offering />
                <Gallery />
                <Pillars/>
            </div>
            <Contact />

        </div>

    )
}

export default Home