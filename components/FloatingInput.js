import React, { Component } from "react";
import { View, TextInput, Animated, Text, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

class FloatingLabelInput extends Component {
  state = {
    isFocused: false
  };

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(
      this.props.value === "" ? 0 : 1
    );
  }

  handleFocus = () => {
    if (this.state.isFocused) return;
    this.setState({ isFocused: true });
  };
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value !== "" ? 1 : 0,
      duration: 200
    }).start();
  }

  render() {
    const { label, ...props } = this.props;
    const color = "#1E88E5";
    const labelStyle = {
      position: "absolute",
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0]
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 14]
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ["#aaa", color]
      })
    };
    return (
      <View style={{ paddingTop: 18 }}>
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <TextInput
          {...props}
          underlineColorAndroid={"transparent"}
          selectionColor="#aeaeae"
          style={styles.input}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onTouchStart={this.handleFocus}
          borderBottomWidth={this.state.isFocused ? 2 : 1}
          borderColor={this.state.isFocused ? "#1E88E5" : "grey"}
          blurOnSubmit
        />
        {this.props.helpertext &&
          this.props.helpertext != "" && (
            <View style={styles.helpertext}>
              <Icon
                name="exclamation-triangle"
                size={18}
                color="#D32F2F"
                style={{ marginRight: 5 }}
              />
              <Text color="#8a6d3b"> {this.props.helpertext} </Text>
            </View>
          )}
      </View>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <View style={{ width: "100%" }}>
        <FloatingLabelInput
          label={this.props.label}
          value={this.props.value}
          onChangeText={newText => this.props.onChangeText(newText)}
          helpertext={this.props.helpertext}
        />
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
    paddingLeft: 5,
    paddingRight: 5,
    width: "100%"
  },
  helpertext: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    backgroundColor: "#fbf3c9",
    marginTop: 2,
    borderWidth: 1,
    borderColor: "#ffe3a9",
    minHeight: 30
  }
});
