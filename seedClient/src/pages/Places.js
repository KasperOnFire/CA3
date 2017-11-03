import React, {Component} from "react";
import placesData from "../facades/placesFacade";


class Places extends Component{
        
  constructor(){
      super();
      this.state = {data: "", err:""};
    }
    
  componentWillMount() {
      /*
      This will fetch data each time you navigate to this route
      If only required once, add "logic" to determine when data should be "refetched"
      */
      placesData.getData((e,data)=>{
        if(e){
          return this.setState({err:e.err});
        }
        this.setState({err:"",data});
      });
    }  
        
  render() {
      return (
        <div>
          <h2>Places</h2>
          <p>This message is fetched from the server for anyone</p>
          
          <div className="msgFromServer">
            {this.state.data.length}  
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
export default Places;

