import React from 'react';
import Card from '../Card/Card.jsx';
import './FromUtdCardList.css'

const FromUtdCardList = ({posts}) => {
	return (
		<div className = "cards">
			{
				posts.map((user,i) => {
					return (
							<Card
								key = {i}
								from = {posts[i].from}
								to = {posts[i].to}
								price = {posts[i].price}
								name = {posts[i].name}
								/>
						);
				})
			}
	  </div>
	)
}

export default FromUtdCardList;
