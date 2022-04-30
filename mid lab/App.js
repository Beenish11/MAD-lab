import React, { useState } from "react";
import {
  ScrollView,
  Button,
  View  } from "react-native";
import CalendarPicker from 'react-native-calendar-picker';
import Prayers from './Components/Prayers'
import Reports from "./Components/Reports";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native'

export default function App() {

const today = new Date();
const today_id = String(today.getDate()) + String(today.getMonth()) + String(today.getFullYear());
const rec = {
  [today_id]: {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    data: [
      { id: 0, name: 'fajar', value: 0 },
      { id: 1, name: 'zuhr', value: 0 },
      { id: 2, name: 'asr', value: 0 },
      { id: 3, name: 'maghrib', value: 0 },
      { id: 4, name: 'isha', value: 0 }
    ]
  },
};
const d = {
  day: 0,
  month: 0,
  year: 0
};
const [selected, setselected] = useState(today_id);
const [record, setrecord] = useState(rec);
const handleChange = (id, value) => {
  record[selected].data[id].value = value;
  setrecord(record);
};
const handleDatechange = date => {

  date = date._i;
  const r = d;
  r.year = date.year;
  r.month = date.month;
  r.day = date.day;
  const dd = String(r.day) + String(r.month) + String(r.year);
  setselected(dd);
  try {
    console.log(record[dd].data);
  } catch (error) {
    r['data'] = [
      { id: 0, name: 'fajar', value: 0 },
      { id: 1, name: 'zuhr', value: 0 },
      { id: 2, name: 'asr', value: 0 },
      { id: 3, name: 'maghrib', value: 0 },
      { id: 4, name: 'isha', value: 0 }
    ];
    record[dd] = r;
    setrecord(record);
  }
};

const SalahTracker = ({navigation}) => (
  <ScrollView>
   <View style={{
        textAlign: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        elevation:30,
        shadowOffset:{height:1,width:1}}}>
        <CalendarPicker maxDate={new Date()} onDateChange={date => handleDatechange(date)}></CalendarPicker>
      </View>
    <Prayers data={record[selected].data} id={selected} handleChange={(id, value) => handleChange(id, value)} />
    <Button style={{marginTop:40}} title="See Reports" onPress={()=>navigation.navigate("Reports")}></Button>
 </ScrollView> 
)

const SalahReports = () => (
  <Reports record={record}></Reports>
)

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Salah Tracker" component={SalahTracker}></Stack.Screen>
    <Stack.Screen name="Reports" component={SalahReports}></Stack.Screen>
  </Stack.Navigator>
)
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
}