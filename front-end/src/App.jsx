import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Card from "./components/card/Card";

function App() {
	const [countrySearch, setCountrySearch] = useState("");

	const url = "https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?";

	// useEffect(() => {
	// 	let axiData = [];

	// 	axios.get(url).then(({ data: { entries, pages } }) => {
	// 		axiData = [...axiData, ...entries];

	// 		let x = 2;

	// 		let timer = setInterval(() => {
	// 			if (x === pages + 1) {
	// 				clearInterval(timer);
	// 				communicateWithBackend(axiData);
	// 			}
	// 			(async () => {
	// 				let response = await myPromise(x);
	// 				axiData = [...axiData, ...response];
	// 			})();
	// 			x++;
	// 		}, 2000);
	// 	});
	// }, []);

	function communicateWithBackend(arr) {
		console.log(arr);
	}

	// console.log(data.length);
	// useEffect(() => {
	// 	data.forEach((d) => {
	// 		axios
	// 			.post("http://127.0.0.1:8000/restaurants/", d)
	// 			.then((res) => console.log("r"));
	// 	});
	// }, []);

	function myPromise(x) {
		return new Promise((resolve, reject) => {
			fetch(`${url}page=${x}`)
				.then((res) => res.json())
				.then(({ entries }) => resolve(entries));
		});
	}

	return (
		<div className="App">
			
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/card" element={<Card/>} />
			</Routes>
		
		</div>
	);
}

export default App;
