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
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { List, Divider, DefaultTheme, Searchbar } from "react-native-paper";
import ABowlofNoodles from "../Database/ABowlofNoodles";
import ChristophersCakeShop from "../Database/ChristophersCakeShop.json";
import Dizys from "../Database/Dizys.json";
import DoubleCrossDiningRoom from "../Database/DoubleCrossDiningRoom.json";
import EastOceanSeafood from "../Database/EastOceanSeafood.json";
import Hansang from "../Database/Hansang.json";
import HenryLee from "../Database/HenryLees.json";
import HongHaBakery from "../Database/HongHaBakery.json";
import HongKongStreetFood from "../Database/HongKongStreetFood.json";
import LaLuneMarket from "../Database/LaLuneMarket.json";
import LAnnam from "../Database/LAnnam.json";
import LeibleCoffee from "../Database/LeibleCoffee.json";
import LokhaCafe from "../Database/LokhaCafe.json";
import Mikazuki from "../Database/Mikazuki.json";
import NanjingDumpling from "../Database/NanjingDumpling.json";
import NuriyahCafe from "../Database/NuriyahCafe.json";
import PhoSongHuong from "../Database/PhoSongHuong.json";
import SantaCafe from "../Database/SantaCafe.json";
import SeochoDong from "../Database/SeochoDong.json";
import ShinMachi from "../Database/ShinMachi.json";
import SimplySandwiches from "../Database/SimplySandwiches.json";
import SunflowerTaiwaneseGourmet from "../Database/SunflowerTaiwaneseGourmet.json";
import TheWoodenWhisk from "../Database/TheWoodenWhisk.json";
import Tokki from "../Database/Tokki.json";
import Toriciya from "../Database/Toriciya.json";
import Torotoro from "../Database/TorotoroRamen.json";

const filtering = (query) => (res) => {
  if (!query) return true;
  const rs = Object.values(res).filter((r) => {
    if (r) {
      return r.toString().includes(query);
    } else {
      return false;
    }
  });
  return !!rs.length;
};

export default function WelcomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const restaurants = [
    Torotoro,
    HenryLee,
    ABowlofNoodles,
    EastOceanSeafood,
    SunflowerTaiwaneseGourmet,
    LeibleCoffee,
    Tokki,
    ChristophersCakeShop,
    Dizys,
    DoubleCrossDiningRoom,
    Hansang,
    HongHaBakery,
    HongKongStreetFood,
    LaLuneMarket,
    LAnnam,
    LokhaCafe,
    Mikazuki,
    NanjingDumpling,
    NuriyahCafe,
    PhoSongHuong,
    SantaCafe,
    SeochoDong,
    ShinMachi,
    SimplySandwiches,
    TheWoodenWhisk,
    Toriciya,
  ];
  const restaurant = restaurants
    .filter(filtering(searchQuery))
    .map((selection, index) => {
      return (
        <TouchableOpacity
          style={styles.restaurantObj}
          key={index}
          onPress={() =>
            navigation.navigate("DetailsScreen", { jsonFile: selection })
          }
        >
          <Text style={styles.objText}>{selection.Name}</Text>
          <Image
            style={styles.objImage}
            source={{
              uri: selection.Images,
            }}
          />
        </TouchableOpacity>
      );
    });

  const AppIcon = ({ AntName, IonName, style, color, size, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        {AntName && (
          <AntDesign name={AntName} size={size} color={color} style={style} />
        )}
        {IonName && (
          <Ionicons name={IonName} size={size} color={color} style={style} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <Text style={styles.title}> FoodieSpot </Text>
        <View style={styles.sideItems}>
          <AppIcon
            style={styles.sideIcons}
            IonName="add-circle-outline"
            size={40}
            color="#419c68"
            //color={colourpallet.test1}
            onPress={() => navigation.navigate("CreateNewScreen")}
          />
        </View>
      </View>
      <Searchbar
        //style={{ paddingHorizontal: 10 }}
        placeholder="Search For Your Saved Places"
        onChangeText={onChangeSearch}
        value={searchQuery}
        iconColor="#419c68"
        style={{
          fontFamily: "HelveticaNeue-Medium",
          backgroundColor: "#c8e6b7",
          margin: 8,
          borderColor: "#419c68",
        }}
      />
      <ScrollView style={styles.scrollView}>{restaurant}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
  title: {
    marginTop: "2%",
    paddingVertical: "1%",
    paddingBottom: "3%",
    paddingLeft: "2%",
    // borderWidth: 2,
    // borderColor: colourpallet.black,
    // borderRadius: 6,
    //backgroundColor: colourpallet.background,
    //color: colourpallet.text,
    //textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "Chalkduster",
  },
  scrollView: {
    paddingTop: 10,
  },
  objImage: {
    width: "100%",
    height: "110%",
    borderRadius: 30,
  },
  restaurantObj: {
    //alignItems: "center",
    justifyContent: "center",
    margin: 20,
    height: 120,
    width: "90%",
    borderColor: "#c8e6b7",
    //borderWidth: 5,
    // borderRadius: 10,
    // borderTopWidth: 25,
    // borderBottomWidth: 20,
    // //width: "90%",
    borderBottomWidth: 3,
    borderBottomColor: "#000000",
    paddingBottom: 20,
  },
  objText: {
    //paddingBottom: 5,
    margin: 5,
    fontSize: 18,
    fontFamily: "HelveticaNeue-Medium",
    backgroundColor: "#419c68",
    borderRadius: 10,
    //margin: 5,
    color: "#fff",
    paddingLeft: 10,
  },
  sideItems: {
    position: "absolute",
    //top: 1,
    right: 5,
    padding: 5,
  },
  sideIcons: {
    width: 40,
    height: 90,
    marginVertical: 4,
  },
});
