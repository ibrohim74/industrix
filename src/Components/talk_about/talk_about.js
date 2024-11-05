import React from 'react';
import "./talk_about.css"
const TalkAbout = () => {
    return (
        <div className="talk_about" id={"contact"}>
            <span className={"talk_about_opacity"}></span>
            <div className="talk_about_text">
                <h1>Let's Talk About <br/> Project!</h1>
                <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit.</p>
                <a href="#">Contact Us</a>
            </div>
        </div>
    );
};

export default TalkAbout;