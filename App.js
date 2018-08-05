import React from "react";
import { StyleSheet, Text, View, StatusBar, ToolbarAndroid } from "react-native";
import Input from "./components/Input";
import { Header } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';


export default class App extends React.Component {
  
  componentWillMount() {
    this.border_color = "#3895D3";
  }
  render() {
    someFunction = () => alert("yo!");
    return (
      <View style={styles.main}>
        <StatusBar barStyle="light-content" hidden={false} />
        <View style={styles.header}>
          <Icon name="bars" size={30} color="white"/>
        </View>
        <Input helpertext="Please enter a valid email address." error />
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
    width: "100%"
  },
  header: {
    height: 75,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#0082e8'
  }

});
