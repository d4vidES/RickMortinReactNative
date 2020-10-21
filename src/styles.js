import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    center: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40
    },
    borde: {
        width: '100%',
        flexDirection: 'column',
        padding: 20,
        paddingBottom: 0
    },
    caja: {
        // height: 100,
        margin: 20,
        marginBottom: 0,
        borderRadius: 10,
        backgroundColor: 'rgb(60, 62, 68)',
        shadowColor: "black",
        shadowOffset: {
            width: 1,
            height: 4,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        flexDirection: 'row'
    },
    image: {
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        height: '100%',
        flex: 2
    },
    info: {
        flex: 3,
        padding: 10,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    status: {
        color: 'white',
        fontSize: 13,
    },
    subtitle: {
        color: 'grey',
        fontSize: 14,
    },
    answer: {
        color: 'white',
        fontSize: 15
    },
    searchbar: {
        backgroundColor: 'white', shadowColor: "black",
        shadowOffset: {
            width: 1,
            height: 4,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    pagination: { color: '#4285f4', fontSize: 16 }
});
export default styles;