import React from "react";
import { StyleSheet, Platform, View, StatusBar } from "react-native";
import { Toolbar } from "react-native-material-ui";

export default (Header = () => {
  return (
    <View>
      <View style={styles.statusbar}>
        <StatusBar hidden={false} />
      </View>
      <Toolbar
        leftElement="menu"
        centerElement="Searchable"
        searchable={{
          autoFocus: true,
          placeholder: "Search"
        }}
        rightElement={{
          menu: {
            icon: "more-vert",
            labels: ["item 1", "item 2"]
          }
        }}
        onRightElementPress={label => {
          alert(label);
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  statusbar: {
    backgroundColor: "#1769aa",
    ...Platform.select({
      android: {
        height: StatusBar.currentHeight
      }
    })
  }
});
