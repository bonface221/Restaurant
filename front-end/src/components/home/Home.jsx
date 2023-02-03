import axios from "axios";
import { useState } from "react";
import "./home.css";

function Home() {
	const [searchResults, setSearchResults] = useState([]);
	const [nameSearch, setNameSearch] = useState([]);
	const countrySearchUrl = "http://127.0.0.1:8000/restaurants/";

	const onChangeFunc = (e) => {
		if (e.target.value === "") {
			setSearchResults([]);
		} else {
			axios
				.get(`${countrySearchUrl}?poststed=${e.target.value}`)
				.then(({ data }) => setSearchResults(data.results));
		}
	};

	const onSearch = (e) => {
		if (e.target.value === "") {
			setNameSearch([]);
		} else {
			axios
				.get(`${countrySearchUrl}?search=${e.target.value}`)
				.then(({ data }) => setNameSearch(data.results));
		}
	};

	return (
		<div className="home">
			<h2 className="text-center pt-5">Restaurant Search</h2>
			<div className="form d-flex justify-content-center">
				<form onSubmit={(e) => e.preventDefault()} className="row mt-5">
					<div className="col-md-6 col-sm-6 col-xs-sm">
						<label className="form-label" htmlFor="poststed">
							Enter Country search
						</label>
						<input
							className="form-control"
							onChange={onChangeFunc}
							id="poststed"
							type="text"
						/>
						<div className="search-results mt-3">
							{searchResults.length > 0 && (
								<>
									{searchResults.slice(0, 6).map((result) => (
										<div className="d-flex">
                                            <p
                                                style={{
                                                    cursor:'pointer'
                                                }}
												onClick={() =>
													(window.location.href = `/restaurant/country/${result.poststed}`)
												}
											>
												{result.poststed}
											</p>
										</div>
									))}
								</>
							)}
						</div>
					</div>
					<div className="col-md-6">
						<label className="form-label" htmlFor="poststed">
							Search for a restaurant
						</label>
						<input
							className="form-control"
							onChange={onSearch}
							id="poststed"
							type="text"
						/>
						<div className="search-results mt-3">
							{nameSearch.length > 0 && (
								<>
									{nameSearch.slice(0, 11).map((result) => (
										<div key={result.id} className="d-flex">
											<p
												style={{
													cursor: "pointer",
												}}
												onClick={() =>
													(window.location.href = `/restaurant/${result.id}`)
												}
											>
												{result.navn}
											</p>
										</div>
									))}
								</>
							)}
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Home;
