import React from 'react';


const newsletter = (props) =>{

	let state = (props.stateData.doesValid);
	let isValid = state.validity ? "inputStyles" : "errorInput";

	
	return(
		<div id="bottomWrapper">
			<div className="container">
				<section className="sectionNewsletter">
					<h2 className="newsletterHeading"><span className="spanLETTERS"> Newsletter </span></h2>
						<div className="containerNewsletter">
							<form onSubmit={props.submit} >
								  <div className="form-group">
								    <div className="form-text text-muted" id="pbb-letter-cont-nw">Stay up to date with the latest from me</div>
								    <div className="input-group" id="pd-elementor-apex">

								    	<span className="spanMess"> {state.value} </span>
										
										  <div className="input-group-append">
											

											<div className="input-group mb-3">
											  <input type="text" className={`form-control ${isValid}`} placeholder="Email" name='email' onChange={ (evt) => props.changed(evt) } />

											  <div className="input-group-append">
											    <input className="buttonNewsletter" value="Subcribe" type="submit" />
											  </div>
										
											</div>
										</div>
									</div>
								  </div>
							</form>
						</div>
				</section>
			</div>
		</div>
	)
}

export default newsletter;