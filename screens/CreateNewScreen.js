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

export default function CreateNewScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text> THIS IS AN APP </Text>
      <TextInput
        multiline
        blurOnSubmit
        //style={styles.input}
        placeholder="Enter Title"
        keyboardType="ascii-capable"
      />
      <TextInput
        multiline
        blurOnSubmit
        //style={styles.input}
        placeholder="Enter Description"
        keyboardType="ascii-capable"
      />
      <TextInput
        multiline
        blurOnSubmit
        //style={styles.input}
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
    alignItems: "center",
    justifyContent: "center",
  },
});
