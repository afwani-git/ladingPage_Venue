import React from 'react';

const Location = (props) => {
    return (
    <div className="location_wrapper">
    	<iframe 
    		title="location"
    		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0526307056543!2d106.82656671476862!3d-6.12361949556609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x144b02f766cfe1ef!2sPuri%20Marina%20Club%20House!5e0!3m2!1sid!2sid!4v1582168202523!5m2!1sid!2sid"
    		width="100%" 
    		height="500px"  
    		allowFullScreen
    	>
    	</iframe>

    	<div className="location_tag">
    		<div>Location</div>
    	</div>
    </div>
    )
}

export default Location;