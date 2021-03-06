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
import { Rating, AirbnbRating } from "react-native-ratings";
export default function DetailsScreen({ navigation, route }) {
  restaurant = route.params.jsonFile;
  if (restaurant.Images == "") {
    restaurant.Images =
      "https://skillry-s3-testing-bucket111341-dev.s3.ap-southeast-2.amazonaws.com/TorotoroRamen.png";
  }
  const STAR_IMAGE2 = require("../assets/star3.png");

  return (
    <View style={styles.card}>
      <DropShadow style={styles.commonProp}>
        <View style={styles.container}>
          <Text style={styles.title}>{restaurant.Name}</Text>

          <View style={styles.inputBox}>
            <Text style={styles.body}>Website: {restaurant.Website}</Text>
            <Text style={styles.body}>Book: {restaurant.Booking}</Text>
          </View>

          <Image
            style={styles.objImage}
            source={{
              uri: restaurant.Images,
            }}
          />

          <View style={styles.inputBox}>
            <Text style={styles.body}>Cuisine: {restaurant.Cuisine}</Text>
            <Text style={styles.body}>Cost: {restaurant.Cost}</Text>
            <Text style={styles.body}>Address: {restaurant.Address}</Text>
            <Text style={styles.body}>Notes: {restaurant.Description}</Text>
          </View>

          <View style={styles.inputBox}>
            <Rating
              type="custom"
              ratingImage={STAR_IMAGE2}
              ratingCount={5.0}
              imageSize={20}
              showRating={false}
              ratingColor="#419c68"
              ratingTextColor="#419c68" //green
              ratingBackgroundColor="#e0f2dc"
              readeonly={true}
              startingValue={restaurant.Rating}
              //onFinishRating={this.ratingCompleted}
            />
          </View>
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
    paddingVertical: 50,
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
    paddingVertical: 5,
    borderRadius: 2,
    backgroundColor: "#e0f2dc", //light green
  },

  inputBox: {
    marginTop: 10,
    marginBottom:5,
    
  },

  title: {
    marginTop: 20,
    paddingVertical: 3,
    paddingBottom: 10,
    color: "#419c68", //green title
    textAlign: "center",
    fontSize: 25,
    fontFamily: "HelveticaNeue-Medium",
  },

  body: {
    color: "#361a0a",
    textAlign: "left",
    padding: 2,
    fontSize: 15,
    fontFamily: "HelveticaNeue-Light",
    flexWrap: "wrap",
  },

  objImage: {
    width: "100%",
    height: "30%",
    borderRadius: 30,
    alignItems: "center",
  },
});
