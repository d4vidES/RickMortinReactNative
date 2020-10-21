import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator, SafeAreaView, StatusBar, Text, View } from 'react-native';
import Character from '../components/Character';
import styles from '../styles';
import { datos } from '../../App';
import { getCharacters } from '../store/actions/characterActions';
import { useDispatch, useSelector } from 'react-redux';
import PageControll from '../components/PageControll';
import { SearchBar } from 'react-native-elements';

const Home = ({ navigation, }) => {

    const [searchText, setSearchText] = useState('');
    const [displayCharacters, setDisplayCharacters] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharacters());
    }, []);

    const characters = useSelector(state => state.characters.characters);
    const loading = useSelector(state => state.characters.loading);

    useEffect(() => {
        if (searchText.length == 0) setDisplayCharacters(characters);
        else {
            let tempCharacters = [];
            tempCharacters = characters.filter(c => c.name.toLowerCase().includes(searchText.toLowerCase()));
            setDisplayCharacters(tempCharacters);
        }
    }, [characters, searchText]);

    return (
        <SafeAreaView>
            <SearchBar
                placeholder="Search"
                onChangeText={text => setSearchText(text)}
                lightTheme={true}
                containerStyle={{ backgroundColor: 'white' }}
                inputContainerStyle={styles.searchbar}
                value={searchText}
            />
            {loading
                ? <View style={styles.center}>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
                : <View style={styles.container}>
                    <ScrollView style={{ marginBottom: 140 }}>
                        {displayCharacters.map((item, index) =>
                            index == displayCharacters.length - 1
                                ? <View key={item.id}>
                                    <Character item={item}
                                        index={index}
                                        onPress={() => navigation.navigate('infoCharacter', item)} />
                                    <PageControll />
                                </View>
                                : <Character
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    onPress={() => navigation.navigate('infoCharacter', item)}
                                />
                        )}
                    </ScrollView>

                    {/* </View>
                    <Text>Next Page</Text> */}
                    <StatusBar style="auto" />
                </View>

            }

        </SafeAreaView>
    );
}

export default Home;