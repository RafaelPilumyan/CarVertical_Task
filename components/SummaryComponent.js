import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SummaryComponent = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 16 }}>
        <Text style={styles.headerText}>Privalomasis draudimas</Text>
      </View>
      <View style={styles.lineContainer} />
      <View style={{ marginTop: 16 }}>
        <Text style={styles.textGray}>Draudimo bendrovė</Text>
        <Text style={[styles.textGray, { color: "#333333" }]}>
          Lietuvos draudimas, AB
        </Text>
      </View>
      <View style={{ marginTop: 16 }}>
        <Text style={styles.textGray}>Draudimo laikotarpis</Text>
        <Text style={[styles.textGray, { color: "#333333" }]}>
          2021 08 09 - 2021 11 09
        </Text>
      </View>
      <View style={{ marginTop: 16 }}>
        <Text style={styles.textGray}>Naudojimo paskirtis</Text>
        <Text style={[styles.textGray, { color: "#333333" }]}>
          Standartinė rizika
        </Text>
      </View>
      <View style={styles.lineContainer} />
      <View style={{ marginTop: 16 }}>
        <Text style={styles.textGray}>Draudimo įmoka</Text>
        <Text style={styles.priceText}>13.42€</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 16,
    width: "100%",
    padding: 10,
  },
  lineContainer: {
    width: "100%",
    height: 1,
    backgroundColor: "#00ADEE",
    marginTop: 16,
    opacity: 0.15,
  },
  headerText: {
    color: "#333333",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    lineHeight: 24,
  },
  textGray: {
    color: "#A0A0A0",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    lineHeight: 24,
  },
  priceText: {
    color: "#00ADEE",
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    lineHeight: 32,
  },
});

export default SummaryComponent;
