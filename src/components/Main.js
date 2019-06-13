import React from 'react';
import Cart from './main/Cart';
import Filter from './main/Filter';
import Viewer from './main/Viewer';
import Catalog from './main/Catalog';

class Main extends React.Component {
    constructor() {
    super();

    this.state = {
      filter : {
      	order : "name",
      	query : ""
      },
      phoneSelected : null,
      phoneAdded : {}
      };

    this.addItem = (phone) => {
      let i = this.state.phoneAdded[phone];
	     if (!this.state.phoneAdded.hasOwnProperty(phone)) {
	     	i = 0;
	     } 
	     ++i;
         this.setState ({
         	phoneAdded : {
	      		...this.state.phoneAdded,
         		[phone] :  i} 		
         })
    };

    this.queryChange = this.queryChange.bind(this);
    this.orderChange = this.orderChange.bind(this);

	this.removeItem = (phone) => {
      	let i = this.state.phoneAdded[phone];
		--i;
		if (this.state.phoneAdded.hasOwnProperty(phone)){
	     	this.setState ({
	         	phoneAdded : {
		      		...this.state.phoneAdded,
	         		[phone] :  i} 		
         	})
	     } 
	     if (i === 0) {
     		delete this.state.phoneAdded[phone];
    		this.setState (this.state)
    	}   
	}
  }

    queryChange(event) {
    	this.setState ({
    		filter : {
    			...this.state.filter,
		      	query : event.target.value
    	}})
    };

    orderChange(event) {
    	this.setState ({
    		filter : {
    			...this.state.filter,
		      	order : event.target.value
    	}})
    };

    handleClick = id => {
    	this.setState({
            phoneSelected : id
    	})
    }

    handleBackClick = ()=> {
    	this.setState({
            phoneSelected : ""
    	})
    }

	render(){
		return(
			<main>
				<Cart 
					name = {this.state.phoneAdded} 
					onDeletePhone = {this.removeItem}
				/>
			  {this.state.phoneSelected ? 
				(<Viewer 
		        	id = {this.state.phoneSelected}
		        	onBackClicked = {this.handleBackClick}
					onAddClicked = {this.addItem}
			    />
			    ) : (
				<>
				<Filter
					queryChange = {this.queryChange}
					orderChange = {this.orderChange}
				/>
				<Catalog 
					onPhoneClicked = {this.handleClick}
					onAddClicked = {this.addItem}
					filter = {this.state.filter}
			     /></>)
			  }
			</main>
	)}
}

export default Main;
