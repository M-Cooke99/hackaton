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
import torotoro from "../Database/TorotoroRamen.json";
import henryLee from "../Database/HenryLees.json";

const filtering = (query) => (res) => {
  if (!query) return true;
  const rs = Object.values(res).filter((r) => r.includes(query));
  return !!rs.length;
};

export default function WelcomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const restaurants = [torotoro, henryLee];
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
          <Image
            style={styles.objImage}
            source={{
              uri: selection.Images[0],
            }}
          />
          <Text style={styles.objText}>{selection.Name}</Text>
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
        <Text style={styles.title}> SnackMe </Text>
        <View style={styles.sideItems}>
          <AppIcon
            style={styles.sideIcons}
            IonName="add-circle-outline"
            size={40}
            //color={colourpallet.test1}
            onPress={() => navigation.navigate("CreateNewScreen")}
          />
        </View>
      </View>
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
    //alignItems: "center",
    //justifyContent: "center",
  },
  title: {
    marginTop: "2%",
    paddingVertical: "1%",
    paddingBottom: "5%",
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
    flexDirection: "row",
    paddingTop: 10,
  },
  objImage: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  restaurantObj: {
    margin: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "22%",
    width: "47%",
  },
  objText: { margin: 5, fontSize: 15 },
  sideItems: {
    position: "absolute",
    //top: 1,
    right: 5,
    padding: 5,
  },
  sideIcons: {
    width: 40,
    height: 90,
    marginVertical: 10,
  },
});
