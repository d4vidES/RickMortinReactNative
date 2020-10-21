import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from '../styles';

const Episode = ({ id }) => {

    const navigator = useNavigation();



    return (
        <TouchableWithoutFeedback
            onPress={() => navigator.navigate('infoEpisode', id)}
        >
            <Text style={[styles.answer, { fontSize: 18 }]}>
                {fromNumberToEpisode(id)}
            </Text>
        </TouchableWithoutFeedback>
    );
}

export const fromNumberToEpisode = (number) => {
    if (number <= 11) return 'Season 1 Episode ' + number;
    else {
        number = number - 2;

        let season = Math.floor(number / 10) + 1;
        let episode = number - (season - 1) * 10;
        episode = episode + 1;

        return `Season ${season} Episode ${episode}`
    }
}

export default Episode;