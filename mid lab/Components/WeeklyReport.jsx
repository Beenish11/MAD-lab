import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function DailyReport({ record }) {
  const h = {};
  let m = new Date().getDate();

  [1, 2, 3].map((_) => {
    const temp = [];
    Object.keys(record).map((i) =>
      record[i].day <= m && record[i].day >= m - 7
        ? temp.push(record[i])
        : console.log(i)
    );
    h[m] = temp;
    m = m - 7;
  });

  const g = {};
  Object.keys(h).map((i) => {
    const ofday = [0, 0, 0, 0, 0];
    h[i].map((j) => {
      j.data[0].value !== 0 ? (ofday[0] += 1) : 0;
      j.data[1].value !== 0 ? (ofday[1] += 1) : 0;
      j.data[2].value !== 0 ? (ofday[2] += 1) : 0;
      j.data[3].value !== 0 ? (ofday[3] += 1) : 0;
      j.data[4].value !== 0 ? (ofday[4] += 1) : 0;
    });
    g[i] = ofday;
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
        Weekly Report
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
          <Text>
            Week from : {i - 7}-{i}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.div}>
              <Text style={{ marginBottom: 10 }}>{g[i][0]}</Text>
              <Text>Fajer</Text>
            </View>

            <View style={styles.div}>
              <Text style={{ marginBottom: 10 }}>{g[i][1]}</Text>
              <Text>Zohar</Text>
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
