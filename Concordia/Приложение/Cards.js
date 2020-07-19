import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Link } from 'react-router-native';
import { BtnGroup } from './ButtonGroup';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3de1-471f-bd96-145571e29d72',
        title: 'Fourth Item',
    },
];

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
);

export const CardList = () => {
    const [selectedId, setSelectedId] = useState('');

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                style={{ backgroundColor }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Link style={styles.escButton} to='/Entry'>
                <Text style={styles.escButtonText}>⇦</Text>
            </Link>
            <Text style={styles.text}>Список карт</Text>

            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
            </SafeAreaView>
            <BtnGroup />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    escButton: {
        marginTop: 35,
        marginLeft: 15,
        width: 50,
        backgroundColor: 'white',
    },
    escButtonText: {
        fontSize: 30,
        height: 20,
        color: 'black',
    },
    text: {
        fontSize: 25,
        height: 30,
        color: 'black',
        fontStyle: 'italic',
        textAlign: 'center',
        fontWeight: 'normal',
    },
});
