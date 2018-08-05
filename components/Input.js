import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.error) {
      //this.border_colour = "red";
    }
  }

  render() {
    return (
      <View style={styles.inputContainer}>
          <TextInput
          underlineColorAndroid="transparent"
          selectionColor="lightgray"
          borderColor={"#3895D3"}
          onBlur={this.props.onBlur}
          placeholder={this.props.placeholder}
          value={this.props.value || null}
          style={styles.input}
        />
        {this.props.helpertext && (
          <View style={styles.helpertext}>
          <Icon name="ios-warning" size={16} color="#8a6d3b"/>
          <Text
            style={{
              color: "#8a6d3b",
              marginLeft: 5
            }}
          >
            {" "}
            {this.props.helpertext}{" "}
          </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    width: "80%"
  },
  input: {
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1.5,
    borderRadius: 3,
    width: "100%"
  },
  helpertext: {
    display: 'flex',
    flexDirection:'row', flexWrap:'wrap',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    backgroundColor: "#fbf3c9",
    marginTop: 1,
    borderWidth: 1,
    borderColor: "#ffe3a9",
    borderRadius: 3,
    height: 30,
  },
  toolbar: {
    backgroundColor: '#2196F3',
    height: 56,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});
