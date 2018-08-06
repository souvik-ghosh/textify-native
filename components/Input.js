import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
  }
  this.handleBlur = this.handleBlur.bind(this);
  this.handleFocus = this.handleFocus.bind(this);
  }

  componentWillMount() {
    if (this.props.error) {
      //this.border_colour = "red";
    }
  }

  handleFocus = () => this.setState({ isFocused: true })
  handleBlur = () => this.setState({ isFocused: false })

  render() {
    return (
      <View style={styles.inputContainer}>
          <TextInput
          underlineColorAndroid="transparent"
          selectionColor="lightgray"
          onTouchStart={this.handleFocus}
          onBlur={this.handleBlur}
          placeholder={this.props.placeholder || 'Placeholder'}
          value={this.props.value || null}
          style={[styles.input, {
            borderBottomColor: !this.state.isFocused
              ? 'lightgray'
              : "#3895D3",
        }]}
          onFocus={() => this.borderColor = 'red'}
        />
        {this.props.helpertext && (
          <View style={styles.helpertext}>
          <Icon name="exclamation-triangle" size={18} color="#8a6d3b"/>
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
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomWidth: 2,
    width: "100%"
  },
  helpertext: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    backgroundColor: "#fbf3c9",
    marginTop: 1,
    borderWidth: 1,
    borderColor: "#ffe3a9",
    minHeight: 30,
  },
  toolbar: {
    backgroundColor: '#2196F3',
    height: 56,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});
