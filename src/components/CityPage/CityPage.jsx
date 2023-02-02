import React from "react";
import "./CityPage.css";

const CityPage = ({city}) => {
	return(
		<div className="epage">
			<h1 className="title">Welcome to {city} carpooling!</h1>
		</div>
	)
}

export default CityPage;