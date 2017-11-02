import React, { Component } from 'react'
import adminData from "../facades/adminFacade";

class AdminPage extends Component {

  constructor() {
    super();
    this.state = { data: "", err: "" };
  }

  componentWillMount() {
    /*
    This will fetch data each time you navigate to this route
    If only required once, add "logic" to determine when data should be "refetched"
    */
    adminData.getData((e, data) => {
      if (e) {
        return this.setState({ err: e.err })
      }
      this.setState({ err: "", data });
	});
  }

  mapData(array) {
	var users = array;
	var html = "<table><tr><th>Username</th><th>Roles</th></tr>"
	users.forEach(function(user) {
		html +="<tr>"+user.username+"</tr>"+"<tr>"+user.role[0]+"</tr>" 
	}, this);
	html = html + "</table>";
	return html;
}

  render() {
    return (
      <div>
        <h2>Admins</h2>
        <p>This message is fetched from the server if you were properly logged in</p>
        <div className="msgFromServer">
		  <p>{console.log(this.state.data)}</p>
		  
        </div>
        {this.state.err && (
          <div className="alert alert-danger errmsg-left" role="alert">
            {this.state.err}
          </div>
		)}
		<div className="allUsers">
		{this.state.users}
		</div>
      </div>
    );
  }
}

export default AdminPage;