import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer';

export default class Header extends React.Component {

	state = {
		open:false
	} 

	toggleDrawer = (value) =>{
		this.setState({
			open:value,
			headerShow:false
		})
	}

	handleScroll = () => {
		if(window.scrollY > 10){
			this.setState({
				headerShow:true
			});
		}else{
			this.setState({
				headerShow:false
			});
		}
	}

	componentDidMount() {
			window.addEventListener('scroll',this.handleScroll)
	}

	render() {
		return (
			<AppBar
				position="fixed"
				style={{
					backgroundColor: this.state.headerShow ?  "#2f2f2f" : 'transparent',
					boxShadow:'none',
					padding:'10px 0px'
				}}
			>

			<Toolbar>
				<div className="header_logo">
					<div className="font_righteous header_logo_venue">The Venue</div>
					<div className="header__logo__title" onClick={() => console.log("hello")}>Musical Events</div>
				</div>

				<IconButton
					aria-label="Menu"
					color="inherit"
					onClick={() => this.toggleDrawer(true)}
				>
					<MenuIcon/>
				</IconButton>

				<SideDrawer
					open={this.state.open}
					onClose={(value) => this.toggleDrawer(value)}
				/>

			</Toolbar>

			</AppBar>
		);
	}
}
