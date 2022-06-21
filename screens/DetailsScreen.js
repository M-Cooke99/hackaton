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

export default function DetailsScreen({navigation, route}) {
 RestaurantTitle = route.params.item;

  return (
   <View style={styles.container}>
     <Text style={styles}>{RestaurantTitle}</Text>
  
  
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: "#faf7e8",
		//alignItems: "center",
		justifyContent: "center",
	},

	dummyTitle: {
		flex: 1,
		marginTop: 50,
		paddingVertical: 20,
		//color: colourpallet.blue,
		color: "#419c68",
		textAlign: "center",
		fontSize: 25,
		fontFamily: "HelveticaNeue-Light",
	},
});
