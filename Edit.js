import React, { useState } from "react";
import { StatusBar, View, Button, Text, TextInput, Alert } from "react-native";
import { datasource } from './Data';

const Edit = ({ navigation, route }) => {
    const [pokemon, setPokemon] = useState(route.params.pokemon);
    const [imageUrl, setImageUrl] = useState(route.params.imageUrl);

    return (
        <View>
            <Text>Pokemon Name:</Text>
            <TextInput style={{ borderWidth: 1 }} onChangeText={(text) => setPokemon(text)} value={pokemon} />
            <Text>Image URL:</Text>
            <TextInput style={{ borderWidth: 1 }} onChangeText={(text) => setImageUrl(text)} value={imageUrl} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={{ margin: 10, flex: 1 }}>
                    <Button
                        title='Save'
                        onPress={() => {
                            let indexnum = route.params.type === "Electric" ? 0 : 1;
                            datasource[indexnum].data[route.params.index] = { key: pokemon, imageUrl: imageUrl };
                            navigation.navigate("Home");
                        }}
                    />
                </View>
                <View style={{ margin: 10, flex: 1 }}>
                    <Button
                        title='Delete'
                        onPress={() => {
                            let indexnum = route.params.type === "Electric" ? 0 : 1;
                            Alert.alert("Are you sure?", '',
                                [
                                    {
                                        text: 'Yes', onPress: () => {
                                            datasource[indexnum].data.splice(route.params.index, 1);
                                            navigation.navigate("Home");
                                        }
                                    },
                                    { text: 'No' }
                                ]);
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default Edit;
