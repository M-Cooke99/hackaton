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
  ScrollView,
} from "react-native";
import { List, Divider, DefaultTheme, Searchbar } from "react-native-paper";

export default function WelcomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const restaurants = ["TorotoroRamen", "HenryLees"];
  const restaurant = restaurants.map((selection, index) => {
    imageAddress = `./assets/Pictures/${selection}.png`;
    return (
      <TouchableOpacity
        style={styles.categoryText}
        key={index}
        onPress={() =>
          navigation.navigate("DetailsScreen", { jsonFile: })
        }
      >
        <Image style={styles.imageShape} source={require(imageAddress)} />
        <Text>{selection}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <SafeAreaView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}> THIS IS AN APP </Text>
      <Searchbar
        //style={{ paddingHorizontal: 10 }}
        placeholder="Search Me"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {restaurant}
      </ScrollView>
    </SafeAreaView>
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
  scrollView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imageShape: {
    width: "20%",
    height: "100%",
    borderRadius: 30,
  },
  categoryText: {
    fontSize: 70,
    margin: 5,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "22%",
    width: "90%",
  },
});
