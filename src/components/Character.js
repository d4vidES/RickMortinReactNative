import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Character = ({ item, onPress }) => {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.caja}>
                <Image
                    style={styles.image}
                    source={{
                        uri: item.image,
                    }}
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.status}>
                        <View style={{ height: 12, width: 12, backgroundColor: statusToColor(item.status), borderRadius: 20, padding: 5, }} /> {item.status} - {item.species}
                    </Text>
                    <View style={{ marginTop: 10 }} />
                    <Text style={styles.subtitle}>Last known location:</Text>
                    <Text style={styles.answer}>{item.location.name}</Text>
                    <View style={{ marginTop: 5 }} />
                    <Text style={styles.subtitle}>First seen in:</Text>
                    <Text style={styles.answer}>{item.origin.name}</Text>
                </View>


            </View>
        </TouchableWithoutFeedback>
    );
}

export const statusToColor = (status) => {
    if (status.toLowerCase() === 'alive') return 'green';
    if (status.toLowerCase() === 'dead') return 'red';
    else return 'grey';
}

export default Character;