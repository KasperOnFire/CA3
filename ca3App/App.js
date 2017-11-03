import React from "react";
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView, ScrollView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';
import Basics from "./JS/Basics";


const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)



class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView >
        <Text style={{ textAlign: "center", fontSize: 20 }}>See all Demos implemented by</Text>
        <Text style={{ textAlign: "center", fontSize: 20 }}>Kasper Ravn Breindal</Text>
        <Text style={{ textAlign: "center", fontSize: 16 }}>http://github.com/kasperonfire/tutorial-native-app</Text>
        <Touchable onPress={() => navigate('basics')} title="Basics" />
      </ScrollView>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  basics: { screen: Basics }
});

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