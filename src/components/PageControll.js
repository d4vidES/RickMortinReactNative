import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { getFollowingPage } from '../store/actions/characterActions';
import styles from '../styles';


const PageControll = () => {

    const dispacth = useDispatch();

    const page = useSelector(state => state.characters.page);
    const maxPage = useSelector(state => state.characters.maxPage);

    useEffect(() => console.log(page), [page])

    return (
        <View
            style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 20
            }}
        >
            {page != 1 &&
                <TouchableWithoutFeedback style={{ marginRight: 10 }}>
                    <Text
                        style={styles.pagination}
                        onPress={() => dispacth(getFollowingPage(page - 1))}
                    >Previous</Text>
                </TouchableWithoutFeedback>
            }
            {page != maxPage &&
                < TouchableWithoutFeedback style={{ marginLeft: 10 }}>
                    <Text
                        style={styles.pagination}
                        onPress={() => dispacth(getFollowingPage(page + 1))}
                    >Next</Text>
                </TouchableWithoutFeedback>
            }

        </View >
    );
}

export default PageControll;