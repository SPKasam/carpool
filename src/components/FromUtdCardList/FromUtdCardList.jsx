import React from 'react';
import Card from '../Card/Card';
import './FromUtdCardList.css'

const FromUtdCardList = () => {
	return (
		<div className = "cards"> 
			<Card from="UTD" to="Austin" price="$20" name="Robin"/>
			<Card from="UTD" to="Houston" price="$20" name="Jack"/>
			<Card from="UTD" to="College Station" price="$20" name="Daniel"/>
			<Card from="UTD" to="Round Rock" price="$20" name="Samantha"/>
	    </div>
	)
}

export default FromUtdCardList;