import React from "react";
import CityCardTemplate from "../CityCardTemplate/CityCardTemplate";
import "./CityCardsList.css";
import austin_image from "./austinda.png";
import houston_image from "./houstonda.png";
import cstat_image from "./cstatda.png";
import roundrock_image from "./rrda.png";


const CityCardsList = () => {
	return(
		<div className="cardsList">
			<CityCardTemplate Image={austin_image}/>
			<CityCardTemplate Image={houston_image}/>
			<CityCardTemplate Image={cstat_image}/>
			<CityCardTemplate Image={roundrock_image}/>
		</div>
	)
}

export default CityCardsList;