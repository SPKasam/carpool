import React from "react";
import CityCardTemplate from "../CityCardTemplate/CityCardTemplate";
import "./CityCardsList.css";
import austin_image from "./austinda.png";
import houston_image from "./houstonda.png";
import cstat_image from "./cstatda.png";
import roundrock_image from "./rrda.png";



const CityCardsList = ({setCity, setPage}) => {
	return(
		<div className="cardsList">
			<CityCardTemplate 
				Image={austin_image}
				setPage={setPage}
				setCity={setCity}
				cityName='Austin'
			/>
			<CityCardTemplate 
				Image={houston_image}
				setPage={setPage}
				setCity={setCity}
				cityName='Houston'
			/>
			<CityCardTemplate 
				Image={cstat_image}
				setPage={setPage}
				setCity={setCity}
				cityName='College Station'
			/>
			<CityCardTemplate 
				Image={roundrock_image}
				setPage={setPage}
				setCity={setCity}
				cityName='Round Rock'
			/>
		</div>
	)
}

export default CityCardsList;