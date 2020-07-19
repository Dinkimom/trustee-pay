import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Link } from 'react-router-native';

export const Entry = () => {
    // используем хук useState
    // [поле, сеттер (выставление нового значения)] = useState(начальное значение)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleLogin = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass);
    };

    // в функциональных компонентах нет метода render
    // функция должна возвращать верстку через return
    return (
        <View style={styles.container}>
            <Link style={styles.escButton} to='/'>
                <Text style={styles.escButtonText}>⇦</Text>
            </Link>
            <Text style={styles.text}>Вход в аккаунт</Text>

            <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                placeholder=' Email'
                placeholderTextColor='#A4A4A4'
                autoCapitalize='none'
                onChangeText={handleEmailChange}
                // нужно выставлять значение, иначе текст не будет изменяться
                value={email}
            />

            <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                placeholder=' Password'
                placeholderTextColor='#A4A4A4'
                autoCapitalize='none'
                onChangeText={handlePasswordChange}
                value={password}
            />

            <Link style={styles.submitButton} to='/Cards'>
                <Text style={styles.submitButtonText}>Войти</Text>
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
        marginTop: 30,
        marginLeft: 40,
        marginBottom: 40,
        fontSize: 35,
        height: 35,
        color: 'black',
        fontStyle: 'italic',
        textAlign: 'left',
        fontWeight: 'normal',
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
