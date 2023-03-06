import React from "react";
import "../../index.css";

function Contact() {
    return(
        <section className="contact skills">

            <div className="columns is-centered mx-6 mt-6">

                <div className="column is-one-third-desktop is-full-mobile has-text-left-desktop has-text-centered-mobile">
                    <p className="green-text has-text-weight-bold mb-5">QUICKLINKS</p>
                    <p className="has-text-weight-bold has-text-white mb-3">Home</p>
                    <p className="has-text-weight-bold has-text-white mb-3">About</p>
                    <p className="has-text-weight-bold has-text-white mb-3">Portfolio</p>
                    <p className="has-text-weight-bold has-text-white mb-3">My Skills</p>
                    <p className="has-text-weight-bold has-text-white mb-6">Contact Me</p>
                </div>

                <div className="column is-one-third-desktop is-full-mobile has-text-left-desktop has-text-centered-mobile">
                    <p className="green-text has-text-weight-bold mb-5">CONTACT ME</p>
                    <p className="has-text-weight-bold has-text-white mb-3"> <span className="green-text">Email: </span>hello@binali.com</p>
                    <p className="has-text-weight-bold has-text-white mb-6"> <span className="green-text">Mobile Number: </span>+94 771234567</p>
                </div>

                <div className="column is-one-third-desktop is-full-mobile has-text-left-desktop has-text-centered-mobile">
                    <p className="green-text has-text-weight-bold mb-5">LOCATION</p>
                    <p className="has-text-weight-bold has-text-white mb-6"> <span className="green-text">Permanent Address: </span>No.123, Main Street, Colombo.</p>
                </div>

            </div>

            <div className="columns is-centered">

                <div className="column is-narrow mx-3 has-text-centered">
                    <i className="fa-brands fa-facebook fa-3x my-3 has-text-white"></i>
                </div>

                <div className="column is-narrow mx-3 has-text-centered">
                    <i className="fa-brands fa-linkedin fa-3x my-3 has-text-white"></i>
                </div>

                <div className="column is-narrow mx-3 has-text-centered">
                    <i className="fa-brands fa-google fa-3x my-3 has-text-white"></i>
                </div>
                
                <div className="column is-narrow mx-3 has-text-centered">
                    <i className="fa-brands fa-twitter fa-3x my-3 has-text-white"></i>
                </div>

                <div className="column is-narrow mx-3 has-text-centered">
                    <i className="fa-brands fa-telegram fa-3x my-3 has-text-white"></i>
                </div>

            </div>
        </section>
    );
}

export default Contact;