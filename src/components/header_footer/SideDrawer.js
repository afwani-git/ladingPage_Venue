import React from 'react';
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem  from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

	const toElmnt = (element) => {
		scroller.scrollTo(element,{
			duration:1500,
			dealay:100,
			smooth:true,
			offset:-150
		});
		props.onClose(false);
	}

  return (
  	<Drawer
  		anchor="right"
  		open={props.open}
  		onClose={() => props.onClose(false)}
  	>
  		<List component="nav">
  			<ListItem button onClick={() => toElmnt("Event")}>
  				Event Starts in
  			</ListItem>

  			<ListItem button onClick={() => toElmnt("Venue")}>
  				Venue Info
  			</ListItem>

  			<ListItem button onClick={() => toElmnt("Highlights")}>
  				Highlights
  			</ListItem>

  			<ListItem button onClick={() => toElmnt("Pricing")}>
  				Pricing
  			</ListItem>

  			<ListItem button onClick={() => toElmnt("Location")}>
  				Location
  			</ListItem>
  		</List>

  	</Drawer>
  )
}

export default SideDrawer;