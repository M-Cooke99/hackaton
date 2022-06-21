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
import { List, Divider, DefaultTheme, Searchbar } from "react-native-paper";

export default function WelcomeScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}> THIS IS AN APP </Text>
      <Searchbar
        //style={{ paddingHorizontal: 10 }}
        placeholder="What place do you want to find?"
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
  },
  title: {
    marginTop: "2%",
    paddingVertical: "1%",
    paddingLeft: "2%",
    // borderWidth: 2,
    // borderColor: colourpallet.black,
    // borderRadius: 6,
    //backgroundColor: colourpallet.background,
    //color: colourpallet.text,
    //textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
  },
});
