import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  TextInput,
  FlatList,
  TouchableOpacity,
  Pressable,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { FontAwesome5 } from "@expo/vector-icons";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

const DetailsScreen = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const [plateNr, setPlateNr] = useState("FOO 123");
  const [personalNr, setPersonalNr] = useState("30000000000");
  const [selectedMonth, setSelectedMonth] = useState(6);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");

  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth() + 1;
  const day = selectedDate.getDate();

  useEffect(() => {
    const currentDate = new Date();
    const futureDate = addMonths(currentDate, selectedMonth);
    setFormattedDate(formatDate(futureDate));
  }, [selectedMonth]);

  const navigation = useNavigation();

  const months = [
    { id: 1, name: "1 mėnuo", duration: 1 },
    { id: 2, name: "3 mėnesiai", duration: 3 },
    { id: 3, name: "6 mėnesiai", duration: 6 },
    { id: 4, name: "9 mėnesiai", duration: 9 },
    { id: 5, name: "12 mėnesiu", duration: 12 },
  ];

  const selectMonth = (duration) => {
    setSelectedMonth(duration);

    const newDate = addMonths(selectedDate, duration);
    setFormattedDate(formatDate(newDate));
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`;
  };

  const addMonths = (date, months) => {
    const newDate = new Date(date);
    const currentMonth = newDate.getMonth();
    newDate.setMonth(currentMonth + months);

    if (
      newDate.getMonth() < currentMonth &&
      newDate.getFullYear() <= date.getFullYear()
    ) {
      newDate.setFullYear(date.getFullYear() + 1);
    }

    return newDate;
  };

  const handleDateChange = (event, date) => {
    setSelectedDate(date || selectedDate);
    setShowDatePicker(false);
  };

  const goToProviders = () => {
    navigation.navigate("Offers", {
      formattedDate: formattedDate,
      year: year,
      month: month,
      day: day,
    });
  };

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
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.textCenter}>Draudimas</Text>
        </View>
        <View style={{ marginTop: 24 }}>
          <Text style={styles.textBold}>Automobilio draudimas</Text>
        </View>
        <View style={{ marginTop: 8 }}>
          <Text style={styles.textCenter}>
            Duis sodales urna aliquam, aliquam arcu vehicula, pharetra felis
          </Text>
        </View>
        <View style={{ marginTop: 32 }}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Draudimo įsigaliojimo laikas</Text>
            <View style={styles.inputDateContainer}>
              <Text style={styles.textBoldDate}>
                {selectedDate.toLocaleDateString("en-CA").replace(/-/g, " ")}
              </Text>
              <Pressable onPress={() => setShowDatePicker(true)}>
                <FontAwesome5 name="calendar-alt" size={16} color="#00ADEE" />
              </Pressable>
              <Modal visible={showDatePicker} animationType="slide">
                <RNDateTimePicker
                  mode="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </Modal>
            </View>
          </View>
          <View
            style={[styles.inputContainer, { marginTop: 4, marginBottom: 4 }]}
          >
            <Text style={styles.inputTextRed}>Valstybinis numeris</Text>
            <TextInput
              value={plateNr}
              onChangeText={(text) => {
                const formattedText = text.toUpperCase();

                setPlateNr(formattedText);
              }}
              style={styles.textBoldRed}
              placeholder="FOO 123"
              placeholderTextColor="#FF4751"
              maxLength={6}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Asmenis kodas</Text>
            <TextInput
              value={personalNr}
              onChangeText={setPersonalNr}
              style={styles.textBoldPersonNr}
              placeholder="300000000"
              placeholderTextColor="#CCCCCC"
              maxLength={11}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={{ marginTop: 24 }}>
          <Text style={[styles.text, { marginBottom: 16 }]}>
            Draudimo trukmė
          </Text>
          <FlatList
            horizontal
            data={months}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.month,
                  selectedMonth === item.duration && {
                    backgroundColor: "#333333",
                  },
                ]}
                onPress={() => selectMonth(item.duration)}
              >
                <Text
                  style={[
                    styles.monthText,
                    selectedMonth === item.duration && { color: "#fff" },
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
          />
        </View>

        <Pressable style={styles.btnContainer} onPress={goToProviders}>
          <Text style={styles.btnText}>Toliau</Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  textCenter: {
    color: "#fff",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
  text: {
    color: "#fff",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    lineHeight: 24,
  },
  textBold: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
  },
  inputContainer: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 16,
    borderRadius: 8,
  },
  inputText: {
    color: "#A0A0A0",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    lineHeight: 16,
  },
  inputDateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  textBoldDate: {
    color: "#000",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
  inputTextRed: {
    color: "#FF4751",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    lineHeight: 16,
  },
  textBoldRed: {
    color: "#FF4751",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
  },
  textBoldPersonNr: {
    color: "#CCCCCC",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
  },
  month: {
    backgroundColor: "#fff",
    width: 120,
    borderRadius: 24,
    padding: 1,
    alignItems: "center",
  },
  monthText: {
    color: "#00ADEE",
    fontFamily: "Poppins-Bold",
    fontSize: 16,

    textAlign: "center",
  },
  btnContainer: {
    backgroundColor: "#333333",
    marginTop: "auto",
    width: "100%",
    height: 56,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
});

export default DetailsScreen;
