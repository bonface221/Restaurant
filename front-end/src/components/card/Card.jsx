import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Card() {
	const [data, setData] = useState({
		tilsynsbesoektype: "",
		poststed: "",
		sakref: "",
		tilsynsobjektid: "",
		orgnummer: "",
		postnr: "",
		dato: "",
		navn: "",
		tema1_no: "",
		tema3_nn: "",
		tema1_nn: "",
		tema3_no: "",
		tilsynid: "",
		adrlinje1: "",
		karakter1: "",
		adrlinje2: "",
		karakter2: "",
		karakter3: "",
		karakter4: "",
		total_karakter: "",
		tema4_no: "",
		tema4_nn: "",
		tema2_no: "",
		status: "",
		tema2_nn: "",
	});
	let { id } = useParams();
	let url = "http://127.0.0.1:8000/restaurants/";

	useEffect(() => {
		axios.get(`${url}${id}/`).then((res) =>
			setData((prev) => {
				console.log(prev);
				console.log(res.data);
				return {
					...prev,
					...res.data,
				};
			})
		);
	}, []);
	return (
		<div className="Restraurant-detail pt-2 mb-3 container">
			{data.navn && (
				<div className="">
					<h3 className="my-2 fs-2">Details of {data.navn}</h3>
					<div className="mt-3 row">
						<div className="col-md-6">
							<p>poststed - {data.poststed}</p>
							<p>sakref - {data.sakref}</p>
							<p>tilsynsbesoektype - {data.tilsynsbesoektype}</p>
							<p>orgnummer - {data.orgnummer}</p>
							<p>postnr - {data.postnr}</p>
							<p>dato - {data.dato}</p>
							<p>tema1_no - {data.tema1_no}</p>
							<p>tema3_nn - {data.tema3_nn}</p>
							<p>tema1_nn - {data.tema1_nn}</p>
							<p>tema3_no - {data.tema3_no}</p>
							<p>tilsynid - {data.tilsynid}</p>
						</div>
						<div className="col-md-6">
							<p>adrlinje1 - {data.adrlinje1}</p>
							<p>karakter1 - {data.karakter1}</p>
							<p>karakter2 - {data.karakter2}</p>
							<p>karakter3 - {data.karakter3}</p>
							<p>karakter4 - {data.karakter4}</p>
							<p>adrlinje2 - {data.adrlinje2}</p>
							<p>tema4_no - {data.tema4_no}</p>
							<p>tema4_nn - {data.tema4_nn}</p>
							<p>tema2_no - {data.tema2_no}</p>
							<p>status - {data.status}</p>

							<p>total_karakter - {data.total_karakter}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Card;
