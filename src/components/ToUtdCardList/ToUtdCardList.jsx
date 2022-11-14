import React from 'react';
import Card from '../Card/Card.js';

const ToUtdCardList = () => {
	return (
		<div className = 'cards'> 
			<Card from="Austin" to="UTD" price="$20" name="Robin"/>
			<Card from="Round Rock" to="UTD" price="$20" name="Jack"/>
			<Card from="Houston" to="UTD" price="$20" name="Daniel"/>
			<Card from="College Station" to="UTD" price="$20" name="Samantha"/>
	    </div>
	)
}

export default ToUtdCardList;