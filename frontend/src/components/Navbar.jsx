import React, { useState, useEffect } from 'react';
import "../styles/navbar.css"
import Form from "./Form"

const Navbar = () => {

    const [showInquiryForm, setShowInquiryForm] = useState(false);

    const toggleInquiryForm = () => {
        setShowInquiryForm((prevShow) => !prevShow);
    };

    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsSticky(scrollTop > 200);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <a href="/" className="nav-logo">GNV International</a>
            <div className="hamburger" onClick={toggleMobileMenu}>
                <i className="fas fa-bars"></i> {/* Using Font Awesome icon */}
            </div>
            <ul className={`nav-menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
                <li className="nav-item">
                    <a href="/" className="nav-link" onClick={toggleMobileMenu}>Home</a>
                </li>
                <li className="nav-item">
                    <a href="/about" className="nav-link" onClick={toggleMobileMenu}>About</a>
                </li>
                <li className="nav-item">
                    <a href="/contact" className="nav-link" onClick={toggleMobileMenu}>Contact</a>
                </li>
                <li className="nav-item">
                    <a href="/form" className="nav-link" onClick={toggleMobileMenu}>Inquiry</a>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar