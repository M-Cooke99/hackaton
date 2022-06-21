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
import {
  List,
  ToggleButton,
  Provider as PaperProvider,
} from "react-native-paper";
import { Size } from "@ui-kitten/components/devsupport";

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

  const [value, setValue] = React.useState("left");

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
          style={styles.input2}
          placeholder="Any Extra Notes?"
          keyboardType="ascii-capable"
        />
        <View style={{ alignItems: "center", marginBottom: 10 }}>
          <ToggleButton.Row
            onValueChange={(value) => setValue(value)}
            value={value}
          >
            <ToggleButton
              icon="format-align-left"
              value="left"
              //style={{ width: 40, height: 40 }}
              //size={10}
            />
            <ToggleButton icon="format-align-center" value="center" />
            <ToggleButton icon="format-align-right" value="right" />
          </ToggleButton.Row>
        </View>
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
    paddingHorizontal: 10,
    //alignItems: "center",
    //justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 6,
    borderWidth: 0,
    //borderColor: colourpallet.hightlight,
    padding: 10,
    backgroundColor: "#c8e6b7",
    borderRadius: 10,
    fontSize: 16,
    fontFamily: "HelveticaNeue-Light",
  },
  input2: {
    height: 90,
    margin: 6,
    borderWidth: 0,
    //borderColor: colourpallet.hightlight,
    padding: 10,
    backgroundColor: "#c8e6b7",
    borderRadius: 10,
    fontSize: 16,
    fontFamily: "HelveticaNeue-Light",
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "HelveticaNeue-Medium",
    color: "#FFFFFF",
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#419c68",
    alignItems: "center",
    marginTop: 10,
    //paddingHorizontal: 5,
  },
  thumbnail: {
    width: 280,
    height: 280,
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
