import React from "react";
import "../../index.css";

function Skills() {
    return(
        <section className="skills">
            <div className="has-text-centered">
                <h5 className="is-size-3 green-text has-text-weight-bold mb-6">About Me</h5>
            </div>

            <div className="columns is-mobile is-multiline is-centered mx-6">

                <div className="column is-narrow has-text-centered mx-5 mb-2">
                    <div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{"--value":50}}></div>
                    <p className="green-text has-text-weight-bold mt-3">
                        C
                    </p>
                </div>

                <div className="column is-narrow has-text-centered mx-5 mb-2">
                    <div role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{"--value":95}}></div>
                    <p className="green-text has-text-weight-bold mt-3">
                        MS Word
                    </p>
                </div>

                <div className="column is-narrow has-text-centered mx-5 mb-2">
                    <div role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{"--value":85}}></div>
                    <p className="green-text has-text-weight-bold mt-3">
                        MS PowerPoint
                    </p>
                </div>

                <div className="column is-narrow has-text-centered mx-5 mb-2">
                    <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{"--value":80}}></div>
                    <p className="green-text has-text-weight-bold mt-3">
                    MS Excel
                    </p>
                </div>

                <div className="column is-narrow has-text-centered mx-5 mb-2">
                    <div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{"--value":50}}></div>
                    <p className="green-text has-text-weight-bold mt-3">
                    SQL
                    </p>
                </div>

                <div className="column is-narrow has-text-centered mx-5 mb-2">
                    <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{"--value":70}}></div>
                    <p className="green-text has-text-weight-bold mt-3">
                    Adobe Photoshop
                    </p>
                </div>

                <div className="column is-narrow has-text-centered mx-5 mb-2">
                    <div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{"--value":50}}></div>
                    <p className="green-text has-text-weight-bold mt-3">
                    Adobe Illustrator
                    </p>
                </div>
            </div>

        </section>
    );
}
export default Skills;