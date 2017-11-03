import React from "react";
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView, ScrollView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';

const Touchable = (props) => (
	<TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>
);


class HomeScreen extends React.Component {
	static navigationOptions = { title: "Places app"};
	render(){
		const { navigate } = this.props.navigation;
		return (
			<ScrollView >
			<Text style={{textAlign:"center", fontSize:20}}>Made by Kasper</Text>
			<Text style={{ textAlign: "center", fontSize: 16 }}>http://github.com/kasperonfire/ca3</Text>
			<Touchable onPress={() => navigate("")} title="" />
			
			
			</ScrollView>
		)
	}
}


export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
	Home: { screen: HomeScreen }

})

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})