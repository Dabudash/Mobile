import React from "react";
import { StyleSheet, Pressable, View, Text, ScrollView, StatusBar, Button } from "react-native";

export default function ToDoForm(){
    return (
        <View style={StyleSheet.form}>
            <TextInput style= {StyleSheet.input} placeholder="ADD NEW TASK" />
            <Button title="ADD"/>
            <StatusBar/>
        </View>

    );
};

const styles = StyleSheet.create({
    form:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,

    },
    

});