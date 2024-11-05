import React from 'react';
import "./discover.css"

const Discover = () => {
    return (
        <div className="Discover">
            <div className="container">
                <div className="Discover_title">
                    <h1>Discover The Latest Blog <br/> And Articles</h1>
                </div>
                <div className="discover_box">
                    <div className="discover_left">
                        <div className="discover_left_item">
                            <img
                                src={"https://templatekit.jegtheme.com/industrix/wp-content/uploads/sites/408/2023/09/industrial-factory-employee-working-in-wooden-manufacturing-industry-e1694417461228-1536x1024.jpg"}
                                alt=""/>
                            <div className="discover_left_item_text">
                                <h1>Environmental Responsibility in Industry: Case Studies</h1>
                                <p>by John Doe September 11, 2023</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Donec quam felis,...</p>
                            </div>
                        </div>
                    </div>
                    <div className="discover_right">
                        <div className="discover_right_item">
                            <h1>Innovation Spotlight: Breakthroughs in Manufacturing</h1>
                            <p>by John Doe September 11, 2023</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa. Cum sociis natoque penatibus et...</p>
                        </div>
                        <div className="discover_right_item">
                            <h1>Innovation Spotlight: Breakthroughs in Manufacturing</h1>
                            <p>by John Doe September 11, 2023</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa. Cum sociis natoque penatibus et...</p>
                        </div>
                        <div className="discover_right_item">
                            <h1>Innovation Spotlight: Breakthroughs in Manufacturing</h1>
                            <p>by John Doe September 11, 2023</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa. Cum sociis natoque penatibus et...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;