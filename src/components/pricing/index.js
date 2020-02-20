import React from 'react';
import Boxes from './Boxes';

export default class Pricing extends React.Component {

    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uts',
            'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        ],
        linkto: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
        delay: [500, 0, 500]

    }

    render() {
        return (
            <div className="bck_black">
					<div className="center_wrapper pricing_section">
						<h2>Pricing</h2>

						<div className="pricing_wrapper">
							{
								this.state.prices.map((boxs,i) => (
										<Boxes
											prices={this.state.prices[i]}
											positions={this.state.positions[i]}
											desc={this.state.desc[i]}
											linkto={this.state.linkto[i]}
											delayAmimation={this.state.delay[i]}
										/>
								))	
							}
						</div>
					</div>
				</div>
        );
    }
}