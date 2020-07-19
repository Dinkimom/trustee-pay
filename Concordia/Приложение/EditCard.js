import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Link } from 'react-router-native';
export const editCard = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cvv, setCvv] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleCvvChange = (text) => {
        setCvv(text);
    };

    return (
        <View style={styles.allContainer}>
            <Link style={styles.escButton} to='/Cards'>
                <Text style={styles.escButtonText}>⇦</Text>
            </Link>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputCardNumber}
                    underlineColorAndroid='transparent'
                    placeholder=' Номер карты'
                    placeholderTextColor='#A4A4A4'
                    autoCapitalize='none'
                    onChangeText={handleEmailChange}
                    // нужно выставлять значение, иначе текст не будет изменяться
                    value={email}
                />
                <TextInput
                    style={styles.inputCvv}
                    underlineColorAndroid='transparent'
                    placeholder=' Cvv'
                    placeholderTextColor='#A4A4A4'
                    autoCapitalize='none'
                    onChangeText={handleCvvChange}
                    value={cvv}
                />
            </View>
            <TextInput
                style={styles.inputFio}
                underlineColorAndroid='transparent'
                placeholder=' ФИО держателя карты'
                placeholderTextColor='#A4A4A4'
                autoCapitalize='none'
                onChangeText={handlePasswordChange}
                value={password}
            />
            <TextInput
                style={styles.inputValidlity}
                underlineColorAndroid='transparent'
                placeholder=' Срок действия карты ДД.ММ.ГГ  '
                placeholderTextColor='#A4A4A4'
                autoCapitalize='none'
                onChangeText={handlePasswordChange}
                value={password}
            />
            <TextInput
                style={styles.inputPass}
                underlineColorAndroid='transparent'
                placeholder=' ФИО держателя карты'
                placeholderTextColor='#A4A4A4'
                autoCapitalize='none'
                onChangeText={handlePasswordChange}
                value={password}
            />
            <Link style={styles.submitButton} to='/Cards'>
                <Text style={styles.submitButtonText}>
                    Подтвердить изменения
                </Text>
            </Link>
        </View>
    );
};
const styles = StyleSheet.create({
    allContainer: {
        // flexDirection: 'row',
        paddingTop: 23,
    },
    container: {
        flexDirection: 'row',
        paddingLeft: 0,
    },
    inputPass: {
        margin: 15,
        height: 40,
        borderColor: '#000000',
        borderWidth: 1,
    },
    inputValidlity: {
        marginLeft: 15,
        marginRight: 15,
        height: 40,
        borderColor: '#000000',
        borderWidth: 1,
    },
    inputFio: {
        margin: 15,
        height: 40,
        borderColor: '#000000',
        borderWidth: 1,
    },
    inputCardNumber: {
        width: 230,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 5,
        height: 40,
        borderColor: '#000000',
        borderWidth: 1,
    },
    inputCvv: {
        width: 50,
        marginTop: 15,
        marginLeft: 5,
        marginRight: 10,
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
