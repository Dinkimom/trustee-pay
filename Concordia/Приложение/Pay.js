import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

export const Pay = () => {
    return (
        <View style={styles.container}>
            <Link style={styles.escButton} to='/Cards'>
                <Text style={styles.escButtonText}>⇦</Text>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#000000',
        borderWidth: 1,
    },
    submitButton: {
        backgroundColor: '#000000',
        padding: 17,
        margin: 10,
        height: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    submitButtonText: {
        fontSize: 20,
        height: 20,

        color: 'white',
    },
    text: {
        fontSize: 25,
        height: 30,
        color: 'black',
        fontStyle: 'italic',
        textAlign: 'center',
        fontWeight: 'normal',
    },
    underline: {
        textDecorationLine: 'underline line-through',
    },
    welcome: {
        paddingVertical: 80,
    },
    escButton: {
        marginTop: 10,
        marginLeft: 15,
        width: 50,
        backgroundColor: 'white',
    },
    escButtonText: {
        fontSize: 30,
        height: 20,
        color: 'black',
    },
});
