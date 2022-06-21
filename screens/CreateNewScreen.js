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
  ImageBackground,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Rating, AirbnbRating } from "react-native-ratings";

export default function CreateNewScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles}> THIS IS AN APP </Text>
      <View style={styles.border}>
        <TouchableOpacity onPress={() => {}}>
          <ImageBackground
            style={styles.image}
            source={require("../assets/uploadImage.jpeg")}
            //resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          multiline
          blurOnSubmit
          style={styles.input}
          placeholder="Enter Address"
          keyboardType="ascii-capable"
        />
        <TextInput
          multiline
          blurOnSubmit
          style={styles.input}
          placeholder="Enter Name of Place"
          keyboardType="ascii-capable"
        />
        <TextInput
          multiline
          blurOnSubmit
          style={styles.input}
          placeholder="Enter Type of Cuisine"
          keyboardType="ascii-capable"
        />
        <TextInput
          multiline
          blurOnSubmit
          style={styles.input}
          placeholder="Any Notes?"
          keyboardType="ascii-capable"
        />

        <Rating
          type="heart"
          ratingCount={5}
          imageSize={60}
          showRating
          //onFinishRating={this.ratingCompleted}
        />
      </View>
      <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
        <Text style={styles.panelButtonTitle}>Submit</Text>
      </TouchableOpacity>
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
    fontSize: 20,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#26abff",
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 190,
    height: 190,
    padding: 5,
    borderRadius: 40,
    //borderWidth: 20,
  },
});
