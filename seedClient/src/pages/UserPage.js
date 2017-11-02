import React, { Component } from "react";
import userData from "../facades/userFacade";

class UserPage extends Component {

    constructor(){
      super();
      this.state = {data: "", err:""};
    }

    componentWillMount() {
      /*
      This will fetch data each time you navigate to this route
      If only required once, add "logic" to determine when data should be "refetched"
      */
      userData.getData((e,data)=>{
        if(e){
          return this.setState({err:e.err});
        }
        this.setState({err:"",data});
      });
    }
    render() {
      return (
        <div>
          <h2>Users</h2>
          <p>This message is fetched from the server if you are properly logged in</p>
          
		  <div className="msgFromServer">
		  <table>
		  <tr>
		 <th>Username</th>
		 <th>Roles</th> 
		  </tr>
			{this.state.data.map((user, index) => (
				<tr key={index}><td>user.username</td>
								<td>user.roles</td>
				</tr>
			))}
			</table>
          </div>
          { this.state.err && ( 
            <div className="alert alert-danger errmsg-left" role="alert"> 
              {this.state.err}
            </div>
          )}
         
        </div>
      );
    }

  }

export default UserPage;