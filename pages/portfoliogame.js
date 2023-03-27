import React from 'react';

export default function PortFoliogame() {
    return (
        <>
            <h1>
                Use the arrow keys, or WASD, to move. 
                Press the spacebar to interact with objects when prompted. 
                Each building has an object that can be interacted with. 
                This is shown with a glowing outline of the object. 
            </h1>
            <div class="container">
                <iframe src="./pyGame.html" 
                    name="myiFrame" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" 
                    height="500px" width="500px" allowfullscreen></iframe>
            </div>
        </>
    )
}