import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

export default class App extends React.Component {
  render() {
    someFunction = () => alert("yo!");
    return (
      <View style={styles.container}>
        <TextInput
          underlineColorAndroid='transparent'
          selectionColor='lightgrey'
          onBlur={someFunction}
          placeholder="Name"
          style={{ height: 40, paddingLeft: 7, borderColor: '#3895D3', borderWidth: 1.5, borderRadius: 10, width: '80%' }}
        />
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
