import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link } from "react-router-native";

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.welcome}>
                <Text style={styles.text}>Добро пожаловать</Text>
                <Text style={styles.text}>в приложение Concordia.</Text>

                <Text style={styles.text}>Для продолжения войдите</Text>
                <Text style={styles.text}>в аккаунт или</Text>
                <Text style={styles.text}>зарегистрируйтесь.</Text>
            </View>

            <Link style={styles.submitButton} to="/Entry" ><Text style={styles.submitButtonText}>Войти</Text></Link> 
     
            <Link style={styles.submitButton} to="/Register" ><Text style={styles.submitButtonText}>Зарегистрироваться</Text></Link> 

            <Button
                style={styles.underline}
                title='Забыли пароль?'
                color='black'
                accessibilityLabel='Click this button to restore pass'
            />
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
});
