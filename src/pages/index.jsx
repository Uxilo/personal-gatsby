import * as React from "react"

export default function Home() {
	return (
		<div class="container">
			<div class="card">
				<div class="row">
					<div className="col-md-4">
						<img src="https://via.placeholder.com/1920x1080?text=Placeholder" className="img-fluid rounded-start" alt="..."/>
					</div>
					<div className="col-md-8">
						<p class="card-title h2">About Me</p>
						<p class="card-text">Lorem Ipsum stuff</p>

					 	{/* TODO: Put Updated + tags on the bottom */}
						<p class="card-text"><small className="text-muted">Created at : Today</small></p>
					</div>
				</div>
			</div>
		</div>
	)
}
