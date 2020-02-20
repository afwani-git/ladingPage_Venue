import React from 'react';
import TicketIcon from "../../resoursces/images/icons/ticket.png";
import Button from "@material-ui/core/Button";

const Mybutton = (props) => {
    return (
        <Button
  		href={props.link}
  		variant="contained"
  		size={props.size}
  		style={{
  			backgroundColor:props.bg,
  			color:props.color
  		}}
  	>
  		<img 
  			src={TicketIcon}
  			className="iconImage"
  			alt="icon_button"
  		/>
  		{props.text}
  	</Button>
    )
}

export default Mybutton;