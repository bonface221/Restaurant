import './App.css'

function App() {


  return (
		<div className="App">
			<h2 className="text-center pt-5">Restaurant Search</h2>
			<div className="form d-flex justify-content-center">
				<form className="row mt-5">
					<div className="col-md-6">
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

export default App
