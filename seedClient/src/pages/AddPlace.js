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
		const rating = this.state.place.rating;
		const imgUri = this.state.place.imgUri;
                
                
		auth.addPlace(place, (err, loggedIn) => {
		  if (err) {
			return this.setState({ err: err.errorMessage });
		  }
		  this.setState({ err: "" });
		  this.props.history.push("/");
		});
		window.location.href = "/#/login";
	  }
}

