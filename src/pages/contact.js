import React, {Component , Route} from 'react';
import Forms from '../components/Forms/Contact/contact';

class FormBased extends Component {

	constructor(props){
		super(props);
		this.state ={
			data : {
				info : {
					name : {value : null},
					phone : {value : null},
					address :{value : null},
					email : { value : null},
					message :{value : null}
				},
				isValid:{
					validity : false,
					type: '',
					message : '',
				},
				validateForm : {
					name : {value : ''},
					phone : {value : ''},
					address :{value : ''},
					email : { value : ''},
					message :{value : ''}
				},
				isSumbitted : false,
			}
		}

		this.changeHandler = this.changeHandler.bind(this);
		this.onSumbitHandler = this.onSumbitHandler.bind(this);
	}

	validateEmailRegex(val){
 		var re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
   	 	return re.test(String(val).toLowerCase());
	}		

	isValidEmail(name){
		const infoDups = {...this.state.data };
		var defs = infoDups.isValid = { validity: false, type : '', message : ''}
		const constraint =  {...infoDups.isValid };

		if(!this.validateEmailRegex(constraint.email) ){
			
			infoDups.isValid[name] ={ value: 'invalid email format'};
			//Settting data
			this.setState({ data : infoDups});
			return true;

		}else{
			this.setState(defs);
			return false;
		}
	}

	doesFieldSupply(dups){
	
		const stateData = dups.validateForm;
		let formErr, toArr = [];
		let formValid = false;

		let obj = Object.keys(dups.validateForm).map((e, i)=>{
			if ( dups.validateForm[e].value.length === 0 ){
				return dups.validateForm[e].value= `must have a ${e}`;
			}
		})

	
		this.setState({ info : stateData});

		// return formValid;
	}

	changeHandler(e, i){

	    const nameHandler = e.name;
	    let stateClone = { ...this.state.data };
	   	const updatedElemt = {...stateClone.info[nameHandler]};
	  	updatedElemt.value = e.value;

	  	stateClone.validateForm[nameHandler].value = !e.value ?  '' : false ;
	    stateClone.info[nameHandler] = updatedElemt;
	  
	  	//setting data
	   this.setState({data : stateClone});

	   switch(nameHandler){
	   		case 'email' :
	   			this.isValidEmail(e.name);
	   			break;
	   		default:
	   			break;
	   }
	}

	onSumbitHandler(e){

		e.preventDefault();
		
		/*
		*
		* if everything is fine....
		* @params clone objects from current state.....
		*
		*/

		if( !this.doesFieldSupply({...this.state.data})){
			console.log('Fields are not fill up !');
		}else{

		   const values = [...this.state.data.info][0];
		   const {name, phone, email,address, message} = values;


		   fetch(`${process.env.GATSBY_ABS_PATH}formData`, {
			  method: "post",
			  headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json'
			  },

			  //make sure to serialize your JSON body
			  body: JSON.stringify({
			     	name: name.value,
		    		phone : phone.value,
		    		email : email.value,
		    		address : address.value,
		    		message : message.value,
		    		user : process.env.GATSBY_SECRET_U,
		    		pass : process.env.GATSBY_SECRET_P
			  })
			  
			})
			.then( (response) => { 
			    if(response.status === 200){
					const cloneVar = [...this.state.data ][0];
					cloneVar.isSumbitted = true;
					this.setState({ data : cloneVar });
			    }
			}).catch((err) =>{
				if(err){
				  console.log('Something Went Wrong');
				}
			})

		}
	}


	render(){
		return(
			<div>
				<Forms 
					submit={(e)=> this.onSumbitHandler(e)}
					dataInfo={{...this.state.data}}
					changeHandler={(e) => this.changeHandler(e.target, 'info')} 
					headerText={this.props.location}/>
			</div>
		)
	}
}

export default FormBased;