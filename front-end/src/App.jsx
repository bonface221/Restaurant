import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
	const [entriesArray, setEntriesArray] = useState([]);

	const url = "https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?";

	useEffect(() => {
		let axiData = [];

		axios.get(url).then(({ data: { entries, pages } }) => {
			axiData = [...axiData, ...entries];

			let x = 2;

			let timer = setInterval(() => {
				if (x === 11) {
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
	}, []);

	function communicateWithBackend(arr) {
		console.log(arr);
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
			<h2 className="text-center pt-5">Restaurant Search</h2>
			<div className="form d-flex justify-content-center">
				<form className="row mt-5">
					<div className="col-md-6 col-sm-6 col-xs-sm">
						<label className="form-label" htmlFor="poststed">
							Enter Country search
						</label>
						<input className="form-control" id="poststed" type="text" />
					</div>
					<div className="col-md-6">
						<label className="form-label" htmlFor="poststed">
							Search for a restaurant
						</label>
						<input className="form-control" id="poststed" type="text" />
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;
