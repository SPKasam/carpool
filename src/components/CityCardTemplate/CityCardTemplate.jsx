import React from 'react';
import "./CityCardTemplate.css";

const CityCardTemplate = ({Image}) => {
	return (
		<div>
			<div className="image-slot">
				<img className="image" src={Image}/>
			</div>
		</div>
	)
}

export default CityCardTemplate;