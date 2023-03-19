import React from "react"; //Main React.js library

const dataJumbo = {
	title:"A Warm Welcome!",
	description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
	buttonURL:"..."};
	
	const buttonLabelJumbo = "Call to Action!"

const Jumbo = () =>{
    return (
        <div className="jumbotron p-5 mt-3 mb-3 bg-light ">
			<h1 className="display-4">{dataJumbo.title}</h1>
			<p className="lead">{dataJumbo.description}</p>
			<a className="btn btn-primary btn-lg" href={dataJumbo.buttonURL} role="button">
				{buttonLabelJumbo}
			</a>
		</div>

    );
};

export default Jumbo;