import React from "react";
import logo from "../images/Logo.svg";

function Footer() {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <a href="/"><img src={logo} alt="logo"/></a>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Important links</h3>
                    <ul>
                        <li><a href="/">Homepage</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order online</a></li>
                        <li><a href="/">Login in</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Follow us</h3>
                    <ul>
                        <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: 501 W Street, Pallet Town, USA</li>
                        <li>Phone: 012 345 6789</li>
                        <li>Email: littlelemon@restaurant.com</li>
                    </ul>
                </div>
            </section>
        </footer>
    );
}

export default Footer;