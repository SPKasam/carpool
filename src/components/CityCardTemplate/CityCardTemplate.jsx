import React from 'react';
import "./CityCardTemplate.css";

const CityCardTemplate = ({Image, cityName, setPage, setCity}) => {
	function clickedCity(){
		setCity(cityName);
		setPage("cityPage");
	}
	return (
		<div className="card_" onClick={() => clickedCity()}>
			<div className="image-slot">
				<img className="image" src={Image}/>
			</div>
		</div>
	)
}

export default CityCardTemplate;