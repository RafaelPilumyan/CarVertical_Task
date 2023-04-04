import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { UseGetAllProviders } from "../hooks/getAllProviders";
import LoadingScreen from "./LoadingScreen";

const OffersScreen = () => {
  const { data, isLoading } = UseGetAllProviders();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {showLoading ? (
        <LoadingScreen />
      ) : data ? (
        data.map((item) => {
          return (
            <View key={item.insurer.id}>
              <Text>{item.insurer.name}</Text>
            </View>
          );
        })
      ) : (
        <Text>No Data</Text>
      )}
    </View>
  );
};

export default OffersScreen;
