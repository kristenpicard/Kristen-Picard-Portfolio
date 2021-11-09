import React from 'react';
import picture from './images/lake.jpg';

const Headshot = () => (
    <>
        <div>
            <img src={picture} alt="Headshot" className="rounded-full h-80"></img>
        </div>
    </>
);

export default Headshot;
