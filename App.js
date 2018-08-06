import React from "react";
import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import Input from "./components/Input";
import Header from './components/Header';
import FloatingInput from './components/FloatingInput';export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      helper_text: 'abc',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (newText) => this.setState({ value: newText });

  componentWillMount() {
    this.border_color = "#3895D3";
  }
  render() {
    someFunction = () => alert("yo!");
    
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
        <Text>Shake your phone to open the developer menu.</Text>
        <View style={{width: "100%"}}>
        <FloatingInput
          label="Enter your name"
          value={this.state.value}
          onChangeText={this.handleInputChange}
          helpertext={this.state.helper_text}
        />
      </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    display: 'flex',
    alignSelf: 'center',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  }
});
