import React, {Fragment} from  'react';
import Layout from '../../layout';
import style from './contact.module.scss';

const contactForms = (props)=>{

	const formState = props.dataInfo.validateForm;

	return(
		<Fragment>
			<Layout>
			   <div className={style.flexWrapper}>
					<main className={style.flexMainContainer}>
						<div className='container' id={style.bodyForms}>
							
							<h1>Contact Form</h1>
							<p className={style.contactMessage}>
								Hello! Are you having a good day? Anyway, if you have any concerns or you just want to share something, please feel free to drop me a line. I would love to hear anything from you.
							</p>

							<form id={style.contactForm} onSubmit={props.submit}>
								<div className='row'>
									<div className='col-lg-6 col-m-12 col-sm-12 col-xs-12'>
										 <div className="form-group">
											<label> Name  <span className={style.asterisk}>*</span> <span className={style.spanErrorRequired}>{formState.name.value}</span></label>
											<input name="name" type="text" value={props.dataInfo.name} 
												className={`form-control ${formState.name.value? style.notValidForm : style.formInputs} `}
												onChange={props.changeHandler} placeholder='Name' />
										 </div>

										 <div className="form-group">
											<label> Phone <span className={style.asterisk}>*</span> <span className={style.spanErrorRequired}>{formState.phone.value}</span></label>
											<input name='phone' type="text" value={props.dataInfo.phone}
											 	className={`form-control ${formState.phone.value? style.notValidForm : style.formInputs}`}
											    onChange={props.changeHandler}  placeholder='Phone' />
										</div>
									</div>

									<div className='col-lg-6 col-m-12 col-sm-12 col-xs-12'>

										<div className="form-group">
											<label> Email <span className={style.asterisk}>*</span> <span className={style.spanErrorRequired}>{formState.email.value}</span></label>
											<input name='email' type="email" value={props.dataInfo.email} 
											   className={`form-control ${formState.email.value? style.notValidForm : style.formInputs}`}
											   onChange={props.changeHandler}  placeholder='Email'/>
										</div>

										<div className="form-group">
											<label> Address <span className={style.asterisk}>*</span> <span className={style.spanErrorRequired}>{formState.address.value}</span></label>
											<input name='address' type="text" value={props.dataInfo.address} 
												className={`form-control ${formState.address.value? style.notValidForm : style.formInputs}`}
												onChange={props.changeHandler}  placeholder='Address' />
										</div>
									</div>

									<div className='col-lg-12 col-m-12 col-sm-12' id={style.textAreaContainer}>
										<div className="form-group">
											<label>Message </label>
								         		<textarea type="text" name='message' value={props.dataInfo.message}
									           		onChange={props.changeHandler}
									           		className={`form-control ${style.textArea}`}  placeholder='Message'/>
								        </div>
									</div>

									<div className={style.buttonContainer}>
										<input className={style.abtiaryButton}  value="Submit" type="submit" />
									</div>
								</div>
							</form>
						</div>
					</main>
				</div>
			</Layout>
		</Fragment>
	)
}

export default contactForms;