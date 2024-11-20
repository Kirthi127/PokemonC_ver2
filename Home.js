import React from 'react';
import { StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { datasource } from './Data.js';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
    opacityStyle: {
        borderWidth: 1,
        padding: 10,
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    pokemonImage: {
        width: 50,
        height: 50,
        marginLeft: 10,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

const Home = ({ navigation }) => {
    const renderItem = ({ item, index, section }) => {
        return (
            <TouchableOpacity style={styles.opacityStyle}
                onPress={() => {
                    navigation.navigate("Edit", { index: index, type: section.title, pokemon: item.key, imageUrl: item.imageUrl });
                }}>
                <View style={styles.listItem}>
                    <Text style={styles.textStyle}>{item.key}</Text>
                    <Image source={{ uri: item.imageUrl }} style={styles.pokemonImage} />
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <StatusBar />
            <Button title='Add Pokemon' onPress={() => { navigation.navigate("Add") }} />
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgcolor } }) => (
                    <Text style={[styles.headerText, { backgroundColor: bgcolor }]}>
                        {title}
                    </Text>
                )}
            />
        </View>
    );
};

export default Home;
