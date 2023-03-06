import React from "react";
import "../../index.css";

function About() {
    return(
        <section className="about mb-6">
            <div className="has-text-centered">
                <h5 className="is-size-3 green-text has-text-weight-bold mb-6">About Me</h5>
            </div>

            <div className="columns is-centered mx-5">

                <div className="column is-one-third-desktop is-full-touch mx-1">
                    <div className="card">
                        <div className="card-content">
                            <div className="content has-text-centered">
                                <i className="fa-solid fa-school fa-3x mb-3 green-text"></i>
                                <p className="title my-4">Education</p>
                                <p className="has-text-weight-bold">Musaeus College, Colombo 07, Sri Lanka<br />Bachelor of Science in
                                    Information Systems,<br />University of Colombo</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="column is-one-third-desktop is-full-touch mx-1">
                    <div className="card">
                        <div className="card-content">
                            <div className="content has-text-centered">
                                <i className="fa-solid fa-code fa-3x mb-3 green-text"></i>
                                <p className="title my-4">Work Experience</p>
                                <p className="has-text-weight-bold">Internship as a Content Writer, Proofreader at LAUGFS Holdings.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="column is-one-third-desktop is-full-touch mx-1">
                    <div className="card">
                        <div className="card-content">
                            <div className="content has-text-centered">
                                <i className="fa-solid fa-music fa-3x mb-3 green-text"></i>
                                <p className="title my-4">Hobbies</p>
                                <p className="has-text-weight-bold">Music, Games, Movies</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;