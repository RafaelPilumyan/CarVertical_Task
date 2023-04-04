import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React from "react";
import { UseGetAllProviders } from "../hooks/getAllProviders";
import LoadingScreen from "./LoadingScreen";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import OfferCardComponent from "../components/OfferCardComponent";
import { useNavigation, useRoute } from "@react-navigation/native";

const OffersScreen = () => {
  const { data, isLoading } = UseGetAllProviders();
  const route = useRoute();
  // console.log(route.params);
  const routeDate = route.params;

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <LoadingScreen />
      ) : data ? (
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
            <View style={styles.headerContainer}>
              <Pressable onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={16} color="#fff" />
              </Pressable>
              <View style={{ flex: 1 }}>
                <Text style={styles.textCenter}>Draudimo pasiūlymai</Text>
              </View>
            </View>

            <View style={{ marginTop: 44 }}>
              <Text style={styles.textBold}>
                Privalomojo draudimo pasiūlymai
              </Text>
            </View>
            <View style={{ marginTop: 8 }}>
              <Text style={styles.textCenter}>
                Išsirinkite geriausiai jūsų poreikius atitinkantį draudimo
                pasiūlymąhtg
              </Text>
            </View>
            <View style={{ marginTop: 32 }}>
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <OfferCardComponent routeDate={routeDate} data={item} />
                )}
                showsHorizontalScrollIndicator={false}
                horizontal
                ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
              />
            </View>
          </View>
        </LinearGradient>
      ) : (
        <Text>No Data</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textCenter: {
    color: "#fff",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
  textBold: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
  },
});

export default OffersScreen;
