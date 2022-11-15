import React from 'react';

class CreatePostBtn extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
		<div className = "ph2">
			<input
		        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
		        type="submit"
		        value="Need a ride from UTD to somewhere else"
		        onClick = {() => this.props.onButtonClick("UTD")}
		    />
		</div>
		)
	}
}  

export default CreatePostBtn;