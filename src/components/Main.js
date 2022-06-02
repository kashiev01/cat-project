import React, { Fragment, useState } from "react";
const Main = () => {
	const [items, setItems] = useState([]);

	const fetchCatImages = () => {
		fetch("https://api.thecatapi.com/v1/images/search?limit=10&order=Desc")
			.then(response => response.json())
			.then(data => {
				console.log(data.length);
				for (let el of data) {
					setItems(el.url);
				}
				console.log(items);
			});
	};
	return (
		<Fragment>
			<button onClick={fetchCatImages}>Get</button>
			{items.map(item => {
				return (
					<div>
						<img src={item.url} alt="111"></img>
					</div>
				);
			})}
		</Fragment>
	);
};

export default Main;
