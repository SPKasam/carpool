import React from 'react';


const FromButton = ({onButtonClick}) => {
	return (
		<div className = "ph2">
			<input
		        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
		        type="submit"
		        value="Need a ride from UTD to somewhere else"
		        onClick = {() => onButtonClick("UTD")}
		    />
		</div>
	)
}

export default FromButton;