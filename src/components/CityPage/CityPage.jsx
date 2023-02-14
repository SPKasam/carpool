import React from "react";
import "./CityPage.css";
import FromButton from '../FromButton';
import ToButton from '../ToButton';
import {useState} from 'react';
import Card from "../Card/Card";

const CityPage = ({city, data, toUTD, setToUTD}) => { 
	var currData = []
	function filterData(data)
	{
		console.log("filtering data")
		for (let i = 0; i < data.length; i++)
		{
			if (toUTD === false)
			{
				if (data[i]["to"] === city)
				{
					currData.push(data[i])

				}
			}
			else
			{
				if (data[i]["from"] === city)
				{
					currData.push(data[i])
				}
			}
		}
		
	}
	filterData(data)
	return(
		<div className = "simple-bg">
			<div>
					<h1 className="title newfont">Welcome to {city} carpooling!</h1>
					<div className = "flex justify-center pt2 pb3">
						<FromButton city =  {city} setToUTD = {setToUTD}/>
						<ToButton  city =  {city} setToUTD = {setToUTD}/>
					</div>
			</div>
			<div className="cardsdisplay">
				{
					currData.map((user,i) => {
						return (
								<Card
									key = {i}
									from = {currData[i].from}
									to = {currData[i].to}
									price = {currData[i].price}
									name = {currData[i].name}
									description = {currData[i].description}
									type = "driver"
									/>
							);
					})
				}
			</div>
	
		</div>
	)
}

export default CityPage;