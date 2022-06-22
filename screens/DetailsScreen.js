//Once select provides details about the place

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
import DropShadow from "react-native-drop-shadow";

export default function DetailsScreen({ navigation, route }) {
  console.log(route);
  const restaurant = route.params.jsonFile;

  return (
    <View style={styles.card}>
      <DropShadow style={styles.commonProp}>
        <View style={styles.container}>
          <Text style={styles.title}>{restaurant.Name}</Text>

          {/* <Image style={styles.container} 
          source={require(restaurant.Image)}/> */}

          <Text syle={styles.body}>Category: {restaurant.Cuisine}</Text>
          <Text syle={styles.body}>Cost: {restaurant.Cost}</Text>
          <Text style={styles.body}> Address: {restaurant.Address}</Text>
          <Text syle={styles.body}>Notes: {restaurant.Description}</Text>
          <Text syle={styles.body}>Notes: {restaurant.Website}</Text>
          <Text syle={styles.body}>Notes: {restaurant.Booking}</Text>
          <Text syle={styles.body}>Notes: {restaurant.Description}</Text>
        </View>
      </DropShadow>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "",
    borderColor: "#ffffff",
    alignItems: "center",
    paddingVertical: 70,
    paddingHorizontal: 1,
    width: "100%",
  },

  commonProp: {
    flex: 1,
    shadowColor: "#361a0a",
    shadowOffset: {
      width: 22,
      height: 22,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },

  container: {
    flex: 1,
    alignItems: "left",
    //	justifyContent: "center",
    padding: 40,
    paddingVertical: 10,
    borderRadius: 2,
    backgroundColor: "#e0f2dc",
  },

  title: {
    marginTop: 20,
    paddingVertical: 5,
    color: "#419c68", //green title
    textAlign: "center",
    fontSize: 25,
    fontFamily: "HelveticaNeue-Light",
  },

  //text
  body: {
    color: "#361a0a",
    textAlign: "left",
    fontSize: 20,
    marginTop: 20,
    paddingVertical: 5,
    fontFamily: "HelveticaNeue-Light",
  },
});
