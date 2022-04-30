import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import MonthlyReport from "./MonthlyReport";
import DailyReport from "./DailyReport";
import WeeklyReport from "./WeeklyReport";

function Reports({ record }) {
  return (
    <ScrollView>
      <View style={styles.box}>
        <MonthlyReport record={record}></MonthlyReport>
      </View>
      <View style={styles.box}>
        <WeeklyReport record={record}></WeeklyReport>
      </View>
      <View style={styles.box}>
        <DailyReport record={record}></DailyReport>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 5,
    margin: 10,
    textAlign: "center",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 25,
    shadowColor: "black",
    elevation: 30,
    shadowOffset: { height: 1, width: 1 },
  },
});
export default Reports;
