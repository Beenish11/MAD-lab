import React from 'react';
import { View,Text } from 'react-native';
import PrayerSelect from './PrayerSelect'
function Prayers({data, handleChange,id}) {
    return (  
        <View key={id}>
            {data.map(i => (
                    <PrayerSelect key={i.name} name={i.name} idx={i.id} value={i.value} handleChange={(c) => handleChange(i.id, c)} />                
            ))}
        </View>
    );
}

export default Prayers;