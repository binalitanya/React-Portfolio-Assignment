import React from "react";
import "../../index.css";

function Home() {
    return(
        <section className="hero">

            <div className="columns">
                <div className="column is-half left-column is-align-self-center ml-6 pr-6 mt-6">

                    <h5 className="title mt-5 is-size-1 has-text-weight-semibold hero-text white-text">Binali Ukwatte
                    </h5>
                    <h5 className="green-text is-size-1 has-text-weight-bold"> WEB DESIGNER | DEVELOPER </h5>
                    <p className="title is-5 has-text-weight-medium white-text">To be a part of company that indulges
                        professional growth which provides challenging and
                        rewarding career while allowing me to utilize my knowledge and skills.
                    </p>
                </div>
                
            </div>

            <div className="columns">

                <div className="column is-full ml-6">
                    <button className="button hero-button green-button has-text-weight-bold"
                        style={{marginRight: "1.5rem", marginBottom: "1rem"}}> SEE MY
                        PORTFOLIO </button>
                    <button className="button hero-button has-text-weight-bold">DOWNLOAD MY CV</button>
                </div>
            </div>

        </section>
    );
}

export default Home;