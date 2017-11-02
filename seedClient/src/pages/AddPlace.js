import React, { Component } from "react";
import auth from "../authorization/auth";

class AddPlace extends Component{

	constructor() {
		super();
		this.state = { err: "", place: {city:"",zip:"", street:"", gpsLocation:"", description:"", rating:"", imgUri:""}}
	  }

          handleSubmit = (event) => {
		event.preventDefault()
		const city = this.state.place.city;
		const zip = this.state.place.zip;
		const street = this.state.place.street;
		const gpsLocation = this.state.place.gpsLocation;
		const zip = this.state.place.zip;
		const zip = this.state.place.zip;
                
                
		auth.register(user, pass, (err, loggedIn) => {
		  if (err) {
			return this.setState({ err: err.errorMessage });
		  }
		  this.setState({ err: "" });
		  this.props.history.push("/");
		});
		window.location.href = "/#/login";
	  }
}