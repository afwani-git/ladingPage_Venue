import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Mybutton from '../utils/Mybutton';

export default class Discount extends React.Component {
	
	state = {
		discountStart:0,
		discountEnd:30
	} 

	percentage(){
		if(this.state.discountStart < this.state.discountEnd){
			this.setState({
				discountStart:this.state.discountStart+1
			});
		}
	}

	componentDidUpdate() {
		console.log("hello");
		setTimeout(() => {
			this.percentage()}
			,30);
	}


	render() {
		return (
			<div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade
                        onReveal={()=> this.percentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th JUNE</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
               							<Mybutton
               								link="google.com"
               								size="small"
               								bg="#ffa800"
               								color="#fff"
               								text="Purchase tickets"
               							/>             
                        </div>
                    </Slide>
                </div>
            </div>
		);
	}
}
