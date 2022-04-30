import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MonthlyReport({ record }) {
  const h = {};
  let m = new Date().getMonth()+1;
  [1, 2, 5].map((_) => {
    const temp = [];
    Object.keys(record).map((i) =>
      record[i].month === m ? temp.push(record[i]) : console.log(i)
    );
    h[m] = temp;
    m = m - 1;
  });

  const g = {};
  Object.keys(h).map((i) => {
    const ofmonth = [0, 0, 0, 0, 0];
    h[i].map((j) => {
      j.data[0].value !== 0 ? (ofmonth[0] += 1) : 0;
      j.data[1].value !== 0 ? (ofmonth[1] += 1) : 0;
      j.data[2].value !== 0 ? (ofmonth[2] += 1) : 0;
      j.data[3].value !== 0 ? (ofmonth[3] += 1) : 0;
      j.data[4].value !== 0 ? (ofmonth[4] += 1) : 0;
    });
    g[i] = ofmonth;
  });

  return (
    <View
      style={{
        textAlign: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          marginBottom: 30,
        }}
      >
        Monthly Report
      </Text>
      {Object.keys(g).map((i) => (
        <View
          key={[i]}
          style={{
            textAlign: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Month No: {[i]}</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.div}>
              <Text style={{ marginBottom: 10 }}>{g[i][0]}</Text>
              <Text>Fajer</Text>
            </View>

            <View style={styles.div}>
              <Text style={{ marginBottom: 10 }}>{g[i][1]}</Text>
              <Text>Zhoar</Text>
            </View>

            <View style={styles.div}>
              <Text style={{ marginBottom: 10 }}>{g[i][2]}</Text>
              <Text>Ashar</Text>
            </View>

            <View style={styles.div}>
              <Text style={{ marginBottom: 10 }}>{g[i][3]}</Text>
              <Text>Magrab</Text>
            </View>

            <View style={styles.div}>
              <Text style={{ marginBottom: 10 }}>{g[i][4]}</Text>
              <Text>Asha</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  div: {
    padding: 10,
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
    color: "red",
    margin: 10,
  },
});
