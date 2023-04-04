import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const SummaryComponent = (props) => {
  const route = useRoute();
  console.log(route.params?.routeDate?.formattedDate);
  const providerName = route.params?.providerData?.insurer?.name;
  const providerPrice = route.params?.providerData?.price?.amount;
  const providerRisk = route.params?.providerData?.riskProfile;

  const day = route.params?.routeDate?.day;
  const month = route.params?.routeDate?.month;
  const year = route.params?.routeDate?.year;
  const formattedDate = route.params?.routeDate?.formattedDate;

  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 16 }}>
        <Text style={styles.headerText}>Privalomasis draudimas</Text>
      </View>
      <View style={styles.lineContainer} />
      <View style={{ marginTop: 16 }}>
        <Text style={styles.textGray}>Draudimo bendrovė</Text>
        <Text style={[styles.textGray, { color: "#333333" }]}>
          {providerName}
        </Text>
      </View>
      <View style={{ marginTop: 16 }}>
        <Text style={styles.textGray}>Draudimo laikotarpis</Text>
        <Text style={[styles.textGray, { color: "#333333" }]}>
          {`${year}-${formattedMonth}-${formattedDay} - ${formattedDate}`}
        </Text>
      </View>
      <View style={{ marginTop: 16 }}>
        <Text style={styles.textGray}>Naudojimo paskirtis</Text>
        <Text style={[styles.textGray, { color: "#333333" }]}>
          {providerRisk}
        </Text>
      </View>
      <View style={styles.lineContainer} />
      <View style={{ marginTop: 16 }}>
        <Text style={styles.textGray}>Draudimo įmoka</Text>
        <Text style={styles.priceText}>{`${providerPrice} €`}</Text>
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
