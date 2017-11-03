import React from "react";
import { Text, View } from 'react-native';

class Places extends React.Component{
	static navigationOptions = {title:"All places in Database"};
	render(){
		return(
			<View>
				<Text>{this}</Text>
			</View>
		)
	}
}

export default Places;