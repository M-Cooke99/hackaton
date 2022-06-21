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
import * as ImagePicker from "expo-image-picker";

export default function CreateNewScreen({ navigation }) {
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    // if (pickerResult.cancelled === true) {
    //   return;
    // }

    // setSelectedImage({ localUri: pickerResult.uri });
  };

  //   if (selectedImage !== null) {
  //     return (
  //       <View style={styles.container}>
  //         <Image
  //           source={{ uri: selectedImage.localUri }}
  //           style={styles.thumbnail}
  //         />
  //       </View>
  //     );
  //   }

  const [selectedImage, setSelectedImage] = React.useState(null);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.border}>
        <TouchableOpacity onPress={openImagePickerAsync}>
          <ImageBackground
            style={styles.image}
            source={require("../assets/uploadImage2.png")}
            //resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <View>
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
          placeholder="Enter Address"
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
          placeholder="Any Extra Notes?"
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
    height: 75,
    margin: 6,
    borderWidth: 1,
    //borderColor: colourpallet.hightlight,
    padding: 10,
    //backgroundColor: colourpallet.primary,
    borderRadius: 10,
    fontSize: 16,
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
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  image: {
    //flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 240,
    padding: 5,
    borderRadius: 40,
    //borderWidth: 20,
  },
  border: {
    alignItems: "center",
    justifyContent: "center",
  },
});
