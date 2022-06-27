import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Switch, TouchableOpacity } from "react-native";

const TestScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Nav Worked</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});

export default TestScreen;
