import React from 'react';


const CreatePostBtn = ({setPage}) => {
	return (
		<div className = "ph2">
			<input
		        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
		        type="submit"
		        value="Create Post"
		        onClick = {() => setPage("new_post")}
		    />
		</div>
	)
}

export default CreatePostBtn;