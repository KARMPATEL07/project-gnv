import Programme from "./Programme"
import Offering from "./cards/Offering"
import Hero from "./Hero"
import Contact from "./Contact"
import Gallery from "./Gallery"

import "../styles/home.css"




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
                <section className="home-section">
                    <h2>Our Mission</h2>
                    <p>To provide high-quality education that fosters student success.</p>
                </section>
                <section className="home-section">
                    <h2>News and Events</h2>
                    <p>Check out our latest events and news!</p>
                </section>
                <section className="home-section">
                    <h2>Contact Us</h2>
                    <p>Have questions? Reach out to our support team.</p>
                </section>
            </div>
            <Contact />

        </div>

    )
}

export default Home