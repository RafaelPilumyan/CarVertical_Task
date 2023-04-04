import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useEffect } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const OfferCardComponent = ({ data }) => {
  //console.log(data.insurer);
  const navigation = useNavigation();

  const goToSummary = () => {
    setShowLoading(false);
    navigation.navigate("Summary");
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        {data.insurer.id === "lietuvos-draudimas" ? (
          <Image
            source={require("../assets/img/ld.png")}
            style={{ width: "100%", height: 69 }}
            resizeMode="contain"
          />
        ) : data.insurer.id === "compensa" ? (
          <Image
            source={require("../assets/img/comp.png")}
            style={{ width: "100%", height: 69 }}
            resizeMode="contain"
          />
        ) : data.insurer.id === "ergo" ? (
          <Image
            source={require("../assets/img/ergo.png")}
            style={{ width: "100%", height: 69 }}
            resizeMode="contain"
          />
        ) : (
          <View>
            <Text>There is no Image</Text>
          </View>
        )}
      </View>
      <View style={styles.lineContainer} />

      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{`${data.price.amount} €`}</Text>
        <View style={styles.infoIcon}>
          <Ionicons name="information-sharp" size={16} color="#00ADEE" />
        </View>
      </View>
      <View style={styles.checkContainer}>
        <View style={styles.checkIcon}>
          <Entypo name="check" size={10} color="#fff" />
        </View>
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: 16,
          }}
        >
          <Text
            style={styles.text}
          >{`Transportavimas \n sumaišius degalus`}</Text>
        </View>
      </View>

      <Pressable style={styles.btnContainer} onPress={goToSummary}>
        <Text style={styles.textBold}>Pasirinkti</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 16,
    width: 240,
    height: 320,
    padding: 10,
    paddingTop: 51,
  },
  lineContainer: {
    width: "100%",
    height: 1,
    backgroundColor: "#00ADEE",
    marginTop: 43,
    opacity: 0.15,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  priceText: {
    color: "#00ADEE",
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
  },
  infoIcon: {
    backgroundColor: "#00ADEE1A",
    width: 36,
    height: 36,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  checkContainer: {
    marginTop: 12,
    flexDirection: "row",
  },
  checkIcon: {
    backgroundColor: "#333333",
    width: 28,
    height: 28,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#333333",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    lineHeight: 16,
    textAlign: "center",
  },
  btnContainer: {
    backgroundColor: "#00ADEE",
    marginTop: "auto",
    width: "100%",
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  textBold: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
});

export default OfferCardComponent;
