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
  IconButton,
  MD3Colors,
} from "react-native-paper";
import { Size } from "@ui-kitten/components/devsupport";

export default function CreateNewScreen({ navigation }) {
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Cuisine, setCuisine] = useState("");
  const [Description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  let newObj = {
    Name: Name,
    Area: "",
    Suburb: "",
    Cuisine: Cuisine,
    Rating: 5,
    Description: Description,
    FavouriteDish: "",
    Cost: "$$",
    Address: Address,
    Meal: "",
    ToiletQuality: "",
    Queue: "",
    Busy: "",
    Aethestic: "",
    OpenMonday: "",
    OpenTuesday: "",
    OpenWednesday: "",
    OpenThursday: "",
    OpenFriday: "",
    OpenSaturday: "",
    OpenSunday: "",
    PetFriendly: "",
    StaffFriendly: "",
    Images: "",
    Website: "https://example.com.au/",
    Booking: "https://example.com.au/",
    Instagram: "",
    Facebook: "",
  };
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    } else if (!pickerResult.cancelled) {
      setSelectedImage({ localUri: pickerResult.uri });
    }
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
          onChangeText={(Name) => setName(Name)}
        />
        <TextInput
          multiline
          blurOnSubmit
          style={styles.input}
          placeholder="Enter Address"
          keyboardType="ascii-capable"
          onChangeText={(Address) => setAddress(Address)}
        />
        <TextInput
          multiline
          blurOnSubmit
          style={styles.input}
          placeholder="Enter Type of Cuisine"
          keyboardType="ascii-capable"
          onChangeText={(Cuisine) => setCuisine(Cuisine)}
        />
        <TextInput
          multiline
          blurOnSubmit
          style={styles.input2}
          placeholder="Any Extra Notes?"
          keyboardType="ascii-capable"
          onChangeText={(Description) => setDescription(Description)}
        />

        <Rating
          type="star"
          ratingCount={5}
          imageSize={60}
          showRating
          // onFinishRating={() => setRating(this)}
        />
      </View>
      <TouchableOpacity
        style={styles.commandButton}
        onPress={() =>
          navigation.navigate("DetailsScreen", { jsonFile: newObj })
        }
      >
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
    height: "8%",
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
    height: "18%",
    margin: 6,
    borderWidth: 0,
    //borderColor: colourpallet.hightlight,
    padding: 10,
    backgroundColor: "#c8e6b7",
    borderRadius: 5,
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
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#419c68",
    alignItems: "center",
    //marginTop: 5,
    //paddingHorizontal: 5,
  },
  thumbnail: {
    width: "20%",
    height: "20%",
    resizeMode: "contain",
  },
  image: {
    //flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 340,
    height: 150,
    padding: 5,
    borderRadius: 40,
    //borderWidth: 20,
  },
  border: {
    alignItems: "center",
    justifyContent: "center",
  },
});
