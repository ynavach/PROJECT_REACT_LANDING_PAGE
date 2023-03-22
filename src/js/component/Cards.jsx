import React from "react";

const dataCards = [
	{
		image:"https://picsum.photos/id/100/500/325",
		title:"Card Title",
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor. ",
		buttonURL:""
	},{
		image:"https://picsum.photos/id/100/500/325",
		title:"Card Title",
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor. ",
		buttonURL:""
	},{
		image:"https://picsum.photos/id/100/500/325",
		title:"Card Title",
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor. ",
		buttonURL:""
	},{
		image:"https://picsum.photos/id/100/500/325",
		title:"Card Title",
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor. ",
		buttonURL:""
	}
];
	
	const buttonLabelCard = "Find Out More!";

    const Cards = () => {
       return(
			<main className="d-flex gap-4 pb-3">
			{dataCards.map((item, i) => {
					return( 
						<div className="card" key={i}>
                             <img className="card-img-top" src={item.image} alt="Card image cap"/>
                             <div className="card-body">
                               <h5 className="card-title ">{item.title}</h5>
                               <p className="card-text ">{item.description}</p>
							   <div className="card-footer">
                               <a href="#" className="btn btn-primary m-2 ">{buttonLabelCard}</a>
							   </div>
                             </div>
                        </div>
						)})  
			}
			</main>
       );
    };

    export default Cards;