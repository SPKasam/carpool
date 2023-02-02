import React from 'react';
import "./AustinCard.css";
import Image from './austinda.jpeg';

const AustinCard = () => {
	return (
		<div>
			<div className="image-slot">
				<img className="image" src={Image}/>
			</div>
		</div>
	)
}

export default AustinCard;