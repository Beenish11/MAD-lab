import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Image,
    Text
} from "react-native";
import { RadioButton } from 'react-native-paper';

export default function PrayerSelect(props) {
    const [choise, setChoise] = useState(props.value);
    const namaz = ['Fajr', 'Zuhr', 'Asr', 'Magrib', 'Isa']
    const {idx} = props;
    return (
        <View style={styles.view}>
           
            <View style={{ flex: 3,paddingTop:10 }}>
                <Text style={{fountsize: 20}}>{namaz[idx]}</Text>
            </View>
            
            <View style={styles.view1}>
                <RadioButton
                    status={choise === 1 ? 'checked' : 'unchecked'}
                    style={[{ backgroundColor: 'orange', flex: 1 }]}
                    onPress={() => { props.handleChange(1); setChoise(1) }}
                    
                >
                </RadioButton>
                <Image source={require("../assets/ind.png")} style={{width:30, height:30}}></Image>
            </View>

           
            
        </View>
  );
}

const styles = StyleSheet.create({
    view :{
        marginTop: 10,
        padding: 10,
        flexDirection: 'row',
        width: '70%',
        textAlign:'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        elevation:30,
        shadowOffset:{height:1,width:1},
        
    },
    view1 :{
        padding: 5,
        marginHorizontal:5,
        flexDirection: 'row',
        // backgroundColor: 'white',
        // shadowColor: 'black',
        // elevation:5,
        // shadowOffset:{height:1,width:1},
    },
});
