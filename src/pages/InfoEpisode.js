import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fromNumberToEpisode } from '../components/Episode';
import { getEpisode } from '../store/actions/episodeAction';
import styles from '../styles';

const InfoEpisode = ({ route }) => {
    const id = route.params;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEpisode(id));
    }, []);

    const episode = useSelector(state => state.episode.episode);
    const loading = useSelector(state => state.episode.loading);

    return loading
        ? <View style={styles.center}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
        : <View style={{ padding: 20 }}>
            <Text style={episodeStyles.question}>Name:</Text>
            <Text style={episodeStyles.answer}>{episode.name}</Text>
            <Text style={episodeStyles.question}>Air Date:</Text>
            <Text style={episodeStyles.answer}>{episode.air_date}</Text>
            <Text style={episodeStyles.question}>Episode:</Text>
            <Text style={episodeStyles.answer}>{fromNumberToEpisode(episode.id)}</Text>
        </View>
}

const episodeStyles = StyleSheet.create({
    question: {
        color: 'grey',
        fontSize: 18,

    },
    answer: {
        color: 'white',
        fontSize: 22
    }
});

export default InfoEpisode;