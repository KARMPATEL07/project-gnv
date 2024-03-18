import React from 'react';
import '../styles/contact.css'; // Import your custom CSS for styling
import Map from './Map';

const ContactPage = () => {
    let map;

    async function initMap() {
        // The location of Uluru
        const position = { lat: -25.344, lng: 131.031 };
        // Request needed libraries.
        //@ts-ignore
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

        // The map, centered at Uluru
        map = new Map(document.getElementById("map"), {
            zoom: 4,
            center: position,
            mapId: "DEMO_MAP_ID",
        });

        // The marker, positioned at Uluru
        const marker = new AdvancedMarkerElement({
            map: map,
            position: position,
            title: "Uluru",
        });
    }

    initMap();
    return (
        <div className="contact-page">
            <div className="contact-info">
                <h2>Contact Us</h2>
                <div className="info">
                    <div>
                        <h3>Email</h3>
                        <p>info@example.com</p>
                    </div>
                    <div>
                        <h3>Phone</h3>
                        <p>+1234567890</p>
                    </div>
                    <div>
                        <h3>Address</h3>
                        <p>123 Street, City, Country</p>
                    </div>
                    {/* Add more contact information as needed */}
                </div>
            </div>
            <div className="map">
            <Map/>
            </div>
        </div>
    );
};

export default ContactPage;
