import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { datos } from '../../App';
import { statusToColor } from '../components/Character';
import Episode from '../components/Episode';
import styles from '../styles';

const InfoCharacter = ({ route }) => {
    const item = route.params;
    return (
        <ScrollView>
            <Image
                style={{ height: 230 }}
                source={{
                    uri: item.image,
                }}
            />
            <View style={infoStyles.infoContainer}>
                <Text style={infoStyles.title}>{item.name}</Text>
                <Text style={infoStyles.status}>
                    <View style={{ height: 12, width: 12, backgroundColor: statusToColor(item.status), borderRadius: 20, padding: 5, }} /> {item.status} - {item.species}
                </Text>
                <View style={{ marginTop: 10 }} />
                <Text style={infoStyles.subtitle}>Last known location:</Text>
                <Text style={infoStyles.answer}>{item.location.name}</Text>
                <View style={{ marginTop: 5 }} />
                <Text style={infoStyles.subtitle}>First seen in:</Text>
                <Text style={infoStyles.answer}>{item.origin.name}</Text>

            </View>
            <View style={infoStyles.infoContainer}>
                <Text style={infoStyles.subtitle}>Episodes:</Text>
                {item.episode.map(ep => <Episode id={ep.split('/episode/')[1]} />)}

            </View>
        </ScrollView>
    );
}

const infoStyles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white'
    },
    infoContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'rgb(60, 62, 68)',
    },
    status: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600'
    },
    subtitle: {
        fontSize: 18,
        color: 'grey',
        fontWeight: '600'
    },
    answer: {
        fontSize: 20,
        color: 'white',
        fontWeight: '700'
    }
});

export default InfoCharacter;