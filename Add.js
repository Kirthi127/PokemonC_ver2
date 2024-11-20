import React, { useState } from "react";
import { StatusBar, View, Button, Text, TextInput } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { datasource } from './Data';

const Add = ({ navigation }) => {
    const [pokemon, setPokemon] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [type, setType] = useState("Electric");

    return (
        <View>
            <StatusBar />
            <Text>Pokemon Name:</Text>
            <TextInput style={{ borderWidth: 1 }} onChangeText={(text) => setPokemon(text)} value={pokemon} />
            <Text>Image URL:</Text>
            <TextInput style={{ borderWidth: 1 }} onChangeText={(text) => setImageUrl(text)} value={imageUrl} />
            <RNPickerSelect
                default={{ label: "Electric", value: "Electric" }}
                onValueChange={(value) => setType(value)}
                items={[
                    { label: "Electric", value: "Electric" },
                    { label: "Fire", value: "Fire" }
                ]}
            />
            <Button
                title='Submit'
                onPress={() => {
                    let item = { key: pokemon, imageUrl: imageUrl };
                    let indexnum = type === "Electric" ? 0 : 1;
                    datasource[indexnum].data.push(item);
                    navigation.navigate("Home");
                }}
            />
        </View>
    );
};

export default Add;
