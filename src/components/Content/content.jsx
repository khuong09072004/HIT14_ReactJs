import React from "react";
import "../Content/content.css";


const Content = () => {
    return(
        <div className="content">
            <div className="h1-content"><h1>Save your time to using SoftLand</h1></div>
            <div className="content-item">
                <div className="content-item-mini">
                    <img src="https://e7.pngegg.com/pngimages/243/461/png-clipart-computer-icons-learning-quizlet-school-team-members-business-area-thumbnail.png" alt="" />
                    <h3>Explore Your Team</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, beatae!</p>
                </div>
                <div className="content-item-mini">
                <img src="https://e7.pngegg.com/pngimages/243/461/png-clipart-computer-icons-learning-quizlet-school-team-members-business-area-thumbnail.png" alt="" />
                    <h3>Digital Whiteboard</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, beatae!</p>
                </div>
                <div className="content-item-mini">
                <img src="https://e7.pngegg.com/pngimages/243/461/png-clipart-computer-icons-learning-quizlet-school-team-members-business-area-thumbnail.png" alt="" />
                    <h3>Design To Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, beatae!</p>
                </div>
            </div>
        </div>

    );
};

export default Content;