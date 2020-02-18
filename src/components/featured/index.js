import React from 'react';
import Coursel from './Coursel';
import Countdown from './Countdown';

const index = (props) => {
  return (
    <div style={{position:'relative'}}>

    	<Coursel/>

    	<div className="artist_name"> 
    		<div className="wrapper">
    			Ariana Grade
    		</div>
    	</div>

    	<Countdown/>
    	
    </div>
  )
}

export default index;