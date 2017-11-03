import React from "react";
import { Text, View } from 'react-native';
//Todo: Refactor into a seperate file (Basics.js), import and complete the exercise
class Basics extends React.Component {
	static navigationOptions = { title: "Learn the Basics" }
	render() {
	  return (<View><Text>Learn The Bacics</Text></View>)
	}
  }

  export default Basics;