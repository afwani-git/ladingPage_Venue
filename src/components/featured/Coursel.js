import React from 'react';
import Slider from "react-slick";

import slide_one from "../../resoursces/images/slide_one.jpg";
import slide_two from "../../resoursces/images/slide_two.jpg";
import slide_three from "../../resoursces/images/slide_three.jpg";

const Coursel = (props) => {
	 const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
   };

  return (
  	<div
  		className='coursel_warpper'
  		style={{
  			height:`${window.innerHeight}px`,
  			overflow:'hidden'
  		}}
  	>
  	<Slider {...settings}> 

  		<div>
  			<div
  				className="carrousel_image"
  				style={{
  					height:`${window.innerHeight}px`,
  					background:`url(${slide_one})`
  				}}
  			>
  			</div>
  		</div>

  		<div>
  			<div
  				className="carrousel_image"
  				style={{
  					height:`${window.innerHeight}px`,
  					background:`url(${slide_two})`
  				}}
  			>
  			</div>
  		</div>

  		<div>
  			<div
  				className="carrousel_image"
  				style={{
  					height:`${window.innerHeight}px`,
  					background:`url(${slide_three})`
  				}}
  			>
  			</div>
  		</div>

  	</Slider>
  	</div>
  )
}

export default Coursel;