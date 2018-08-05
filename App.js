import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RkButton } from "react-native-ui-kitten";
import { Card } from "react-native-elements";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

export default class App extends React.Component {
  render() {
    someFunction = () => alert('yo!');
    return (
      <View style={styles.container}>
        <Card>
          <FormLabel>Name</FormLabel>
          <FormInput onChangeText={someFunction} />
          <FormValidationMessage>Error message</FormValidationMessage>
          <RkButton>Click me!</RkButton>
          <Text>Shake your phone to open the developer menu.</Text>
        </Card>
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
