import React from 'react';
import './Card.css'

const Card = ({from, to, price, name}) => {
	return (
		<div className = ""> 
			<article className="br2 ba dark-gray b--black-10 mv4 mw5 center card">
			  <img src="http://placekitten.com/g/600/300" className="db w-100 br2 br--top" alt="kitten looking menacing."/>
			  <div className="pa2 ph3-ns pb3-ns">
			    <div className="dt w-100 mt1">
			      <div className="dtc">
			        <h1 className="f5 f4-ns mv0">From {from} to {to}</h1>
			      </div>
			      <div className="dtc tr">
			        <h2 className="f5 mv0">$20</h2>
			      </div>
			    </div>
			    <p className="f6 lh-copy measure mt2 mid-gray">
			      Hi, I'm {name}, nice to meet you. I'm a senior at UTD studying computer science...
			    </p>
			  </div>
			</article>
	    </div>
	)
}

export default Card;