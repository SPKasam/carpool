import React from 'react';
import './Card.css';
import austin from './austinda.jpeg';
import houston from './houstonda.jpeg';
import cstat from './cstatda.png';
import rr from './rrda.png';
import guy from './wiicharacter.jpeg';


const Card = ({from, to, price, name, description, type}) => {
	console.log({from, to, price, name, description, type})
	var image;
  switch(to) {
    case 'Austin':
      image = austin
      break
    case 'Houston':
      image = houston
      break;
    case 'College Station':
      image = cstat
      break;
    case 'Round Rock':
      image = rr
      break;
  }
  switch(from) {
    case 'Austin':
      image = austin
      break
    case 'Houston':
      image = houston
      break;
    case 'College Station':
      image = cstat
      break;
    case 'Round Rock':
      image = rr
      break;
  }
  if (type === "driver")
  {
	  image = guy
  }

	return (
		<div>
			{type === "driver" ? (

						<div className="card pa2">
						<div className="imageslot">
							<img className="image" src={image}/>
						</div>
						<div className="container">
							<div className="firstline">
								<h4><b>{from} to {to}</b></h4>
								<h4 className='pr3'><b>${price}</b></h4>
							</div>
							<div className="body pt3">
								<h4>- Driver: {name}</h4>
								<h4>- Description: {description}</h4>
							</div>
						</div>
					</div>



			) : (

				<div className="card pa2">
				<div className="imageslot">
					<img className="image" src={image}/>
				</div>
			</div>

			)
		}
		</div>
	);
}


export default Card;






// 
// 	return (
// 		<div className = "">
// 			<article className="br2 ba dark-gray b--black-10 mv4 mw5 center card">
// 				<img src="http://placekitten.com/g/600/300" className="db w-100 br2 br--top" alt="kitten looking menacing."/>
// 				<div className="pa2 ph3-ns pb3-ns">
// 					<div className="dt w-100 mt1">
// 						<div className="dtc">
// 							<h1 className="f5 f4-ns mv0">From {from} to {to}</h1>
// 						</div>
// 						<div className="dtc tr">
// 							<h2 className="f5 mv0">$20</h2>
// 						</div>
// 					</div>
// 					<p className="f6 lh-copy measure mt2 mid-gray">
// 						{description}
// 					</p>
// 				</div>
// 			</article>
// 			</div>
// 	)
// 
