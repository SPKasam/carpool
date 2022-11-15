import React from 'react';


const HomeBtn = ({setPage}) => {
	return (
		<div className = "ph2">
			<input
		        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
		        type="submit"
		        value="Back"
		        onClick = {() => setPage("home")}
		    />
		</div>
	)
}

export default HomeBtn;