import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const LoadingScreen = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <LinearGradient
      colors={[
        "hsl(190, 91%, 58%)",
        "hsl(191, 91%, 57%)",
        "hsl(191, 91%, 54%)",
        "hsl(192, 91%, 52%)",
        "hsl(192, 93%, 49%)",
        "hsl(193, 100%, 48%)",
        "hsl(194, 100%, 47%)",
        "hsl(195, 100%, 47%)",
        "hsl(195, 100%, 47%)",
        "hsl(196, 100%, 47%)",
      ]}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.textBold}>
          Ieškome geriausių draudimo pasiūlymų
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textBold: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
  },
});

export default LoadingScreen;
