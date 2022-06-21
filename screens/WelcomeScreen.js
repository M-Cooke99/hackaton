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
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { List, Divider, DefaultTheme, Searchbar } from "react-native-paper";
import torotoro from '../Database/TorotoroRamen.json';
import henryLee from '../Database/HenryLees.json';

export default function WelcomeScreen({ navigation }) {
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

  const list = [torotoro, henryLee];
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <Text style={styles.title}> PERFER </Text>
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
        placeholder="What place do you want to find?"
      />
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
