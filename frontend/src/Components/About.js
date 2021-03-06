import React from 'react';
import './style.css';

const About = () => {
    return (
        <div className="about">
            <div className='headerPhoto'>
                <img src={"https://picsum.photos/970/250"} alt="header"></img>
            </div>
            <div className="body">
                {/* <div class='headerPhoto'>
                <img src={"https://picsum.photos/350/200"} ></img>
            </div> */}
                <div>
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to advocate for animals by providing safety until a home placement of those in our care.
                        We promote spay and nueter programs as a means to control pet overpoulation.
                    </p>
                </div>

                <div>
                    <h2>Wish List</h2>
                    <p>
                        We always have a long shopping list at the Shelter! Donated items can be dropped off at the shelter located
                        at 56 Broad Street in Quincy during adoption hours and left with any of our Volunteers or shipped directly to
                        us from Amazon. Check out our wish list!
                    </p>
                </div>

                <div>
                    <h2>Volunteer</h2>
                    <p>
                        Volunteers are the backbone of our efforst to improve the lives of the animals in our care. You can also become
                        a guardian angel and sponsor a cage or kennel at the shelter. You can become a member of QAS or help out with one
                        of our available positions at QAS.
                    </p>
                </div>

                <div>
                    <h2>Adoption Hours</h2>
                    <p>
                        <ul style={{ listStyleType: "none" }}>
                            <li><b>Tuesday-</b> 6-9PM</li>
                            <li><b>Thursday-</b> 6-8PM</li>
                            <li><b>Saturday-</b> 10AM-4PM</li>
                        </ul>
                    </p>
                </div>
            </div>

        </div>

    )
}

export default About;