import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

export const BtnGroup = () => (
    <SafeAreaView style={styles.container}>
        <View>
            <View style={styles.fixToText}>
                <Link style={styles.btn} to='./Pay'>
                    <Text style={styles.btnText}> Оплатить</Text>
                </Link>
                <Link style={styles.btn} to='EditCard'>
                    <Text style={styles.btnText}> Изменить</Text>
                </Link>
                <Link style={styles.btnDel} to='/Cards'>
                    <Text style={styles.btnText}> Удалить</Text>
                </Link>
            </View>
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'space-around',

        margin: 10,
    },

    fixToText: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    btn: {
        backgroundColor: '#015',
        padding: 20,
        paddingLeft: 26,
        paddingTop: 10,
        margin: 5,
        height: 10,
        width: 100,
    },
    btnText: {
        fontSize: 20,
        height: 20,
        fontSize: 12,
        height: 17,
        color: 'white',
    },
    btnDel: {
        backgroundColor: '#B32828',
        padding: 20,
        paddingLeft: 26,
        paddingTop: 10,
        margin: 5,
        height: 10,
        width: 100,
    },
});
