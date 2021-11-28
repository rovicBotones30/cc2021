import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from 'react';

const ProfileScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>

            <Text style={styles.det}  >
                Enter Your Height
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Height'
                keyboardType="numeric"
            />
            <Text style={styles.det}>
                Enter Your Weight
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Weight'
                keyboardType="numeric"
            />
            <Text style={styles.det}>
                Enter Your Age
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Age'
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            <View>
                <Text style={styles.resultView}>
                    Result Here!
                </Text>
            </View>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',

    },
    resultView: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 80,
        color: '#F7F7F7'
    },
    submitButton: {
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 14,
        backgroundColor: "#FFE300",
        marginVertical: 30,

    },
    buttonText: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 80,
        color: '#F7F7F7'
    },
    det: {
        color: '#F7F7F7'
    },
    input: {
        backgroundColor: 'white',
        marginVertical: 10,
        height: 20,
        width: '50%',
        textAlign: 'center',
        color: 'black',
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});