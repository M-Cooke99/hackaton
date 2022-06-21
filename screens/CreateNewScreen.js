//Create a new place in your list

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableHighlight,
  SafeAreaView,
  Button,
  StatusBarHeight,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function CreateNewScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles}> THIS IS AN APP </Text>
      <TextInput
        multiline
        blurOnSubmit
        style={styles.input}
        placeholder="Enter Title"
        keyboardType="ascii-capable"
      />
      <TextInput
        multiline
        blurOnSubmit
        style={styles.input}
        placeholder="Enter Description"
        keyboardType="ascii-capable"
      />
      <TextInput
        multiline
        blurOnSubmit
        style={styles.input}
        placeholder="Enter Title"
        keyboardType="ascii-capable"
      />
      <TextInput
        multiline
        blurOnSubmit
        style={styles.input}
        placeholder="Enter Title"
        keyboardType="ascii-capable"
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
  input: {
    height: 100,
    margin: 10,
    borderWidth: 2,
    //borderColor: colourpallet.hightlight,
    padding: 10,
    //backgroundColor: colourpallet.primary,
    borderRadius: 20,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    //color: colourpallet.blue,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    //borderBottomColor: colourpallet.hightlight,
    paddingBottom: 5,
  },
});
