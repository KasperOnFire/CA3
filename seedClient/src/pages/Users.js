import React, { Component } from "react";
import auth from "../authorization/auth";

class Users extends Component{

	constructor() {
		super();
		this.state = { err: "", user: {username:"", password:""}};
	  }

	  componentDidMount(){
		var apiLink = "http://localhost:8084/seedMaven/api/demoadmin/getAll";
		var promise = fetch(apiLink);
		var dataField = document.getElementById("data");
		promise.then(function (response) {
			var userData = response.json();
			return userData;
		}).then(function (data) {
			var htmlData = data.map(function (d) {
				return "<p>username: " + d.username + "</p>\n";
			});
			dataField.innerHTML = htmlData;
			console.log(htmlData);
	  });
	}

	 
	render() {
		return (
		<div className="container">
		<h2>All users</h2>
			<div id="data">
			</div>
      </div>
	);
  }
}

export default Users;