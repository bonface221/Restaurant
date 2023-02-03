import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Country() {
	const [countries, SetCountries] = useState([]);

	let { country } = useParams();
	let url = "http://127.0.0.1:8000/restaurants/?poststed=";

	useEffect(() => {
		axios
			.get(`${url}${country}`)
			.then(({ data }) => SetCountries(data.results));
	}, []);

	return (
		<div className="container pt-2">
			<h3 className="text-center mt-4 mb-4">
				Results for
				<span
					style={{
						font: "bold",
					}}
				>
					{` ${country}`}
				</span>
			</h3>

			<div>
				{countries.length > 0 && (
					<div className="row">
						{countries.map((r, i) => (
							<div key={i} className="col-md-3">
								<span
									onClick={() => (window.location.href = `/restaurant/${r.id}`)}
									style={{
										cursor: "pointer",
									}}
								>
									{r.navn}
								</span>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default Country;
