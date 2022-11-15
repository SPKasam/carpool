import React from 'react';
import Card from '../Card/Card';
import './ToUtdCardList.css';

const ToUtdCardList = ({posts}) => {
	return (
		<div className = 'cards'>
			{
				posts.map((user,i) => {
					return (
	            <Card
								key = {i}
								from = {posts[i].from}
								to = {posts[i].to}
								price = {posts[i].price}
								name = {posts[i].name}
								description = {posts[i].description}
	              />
	          );
				})
			}

	  </div>
	)
}

export default ToUtdCardList;
