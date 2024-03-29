import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

function SolutionStep({ title, description }) {
    return (
        <div className="about-text-step">
            <p className="about-text-sTitle">
                <div className="text" style={{ display: "flex", "font-weight": "bold" }}>
                    <div style={{ marginRight: "10px" }}>
                        <FontAwesomeIcon
                            className="fa-icon"
                            icon={faCircleChevronDown}
                        />{" "}
                    </div>
                    <div>{title}</div>
                </div>
            </p>
            <div
                className="about-text-description"
                dangerouslySetInnerHTML={{ __html: description }}
            ></div>
        </div>
    );
}

export default SolutionStep;
