import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Card from "./components/card/Card";
import Country from "./components/countryBased/country";
import Navbar from "./components/navbar/navbar";

function App() {
	const url = "https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?";

	useEffect(() => {
		setInterval(() => {
			let axiData = [];

			axios.get(url).then(({ data: { entries, pages } }) => {
				axiData = [...axiData, ...entries];

				let x = 2;

				let timer = setInterval(() => {
					if (x === pages + 1) {
						clearInterval(timer);
						communicateWithBackend(axiData);
					}
					(async () => {
						let response = await myPromise(x);
						axiData = [...axiData, ...response];
					})();
					x++;
				}, 2000);
			});
		}, 86400000);
	}, []);

	function communicateWithBackend(arr) {
		arr.forEach((d) => {
			axios
				.post("http://127.0.0.1:8000/restaurants/", d)
				.then((res) => console.log(res));
		});
	}

	function myPromise(x) {
		return new Promise((resolve, reject) => {
			fetch(`${url}page=${x}`)
				.then((res) => res.json())
				.then(({ entries }) => resolve(entries));
		});
	}

	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/restaurant/:id" element={<Card />} />
				<Route path="/restaurant/country/:country" element={<Country />} />
			</Routes>
		</div>
	);
}

export default App;
