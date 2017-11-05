import React from "react";
import { Text, View } from 'react-native';
import fetchHelper, {errorChecker} from ".fetchHelpers";
const URL = require("../../package.json").serverURL;

class Places extends React.Component{
	static navigationOptions = {title:"All places in Database"};


	constructor(){
		super();
		this.state = {data: "", err:""};
	}
	componentWillMount(){
		getPlaces((e,data)=>{
			if(e){
			  return this.setState({err:e.err});
			}
			this.setState({err:"",data});
		  });
	}

	getPlaces = (cb) => {
        this._errorMessage = "";
		this._messageFromServer = "";
        let resFromFirstPromise = null;  //Pass on response the "second" promise so we can read errors from server
        const options = fetchHelper.makeOptions("GET", true);
        fetch(URL + "api/places", options)
                .then((res) => {
                    resFromFirstPromise = res;
                    return res.json();
                }).then((data) => {
            errorChecker(resFromFirstPromise, data);
            if (cb) {
                cb(null, data)
            }
        }).catch(err => {
            console.log(JSON.stringify(err))
            if (cb) {
                cb({err: fetchHelper.addJustErrorMessage(err)})
            }
        })
    }

	mapData = (a) => {
		var html = ""
		if(a === ""){
			return "";
		}
                console.log("sadasd", a);
		var rows = a.map(function(p){
			return <Text>{p.city}</Text>;
			//return <tr><td>{p.city}</td><td>{p.zip}</td><td>{p.street}</td><td>{p.gpsLocation}</td><td>{p.description}</td><td>{p.rating}</td><td>{p.imgUri}</td></tr>;
		})
		return rows;
	}

	render(){
		var rows = this.mapData(this.state.data);
		return(
			<View>
				<Text>{rows}</Text>
			</View>
		)
	}
}

export default Places;