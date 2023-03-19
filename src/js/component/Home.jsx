import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

import Nav from "../component/Nav.jsx";
import Jumbo from "../component/Jumbo.jsx";
import Cards from "../component/Cards.jsx";
import Foot from "../component/Foot.jsx";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<Nav/>
			<div className="container">
				<Jumbo/>
				<Cards/>
			</div>
				<Foot/>
		</React.Fragment>
	);
};

export default Home;
