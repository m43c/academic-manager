import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function StudentItem({ item, deleteStudent }) {
    const navigation = useNavigation();

    const average = (gradesString) => {
        const gradesArray = gradesString.split(" ").map(parseFloat);
        const gradesSum = gradesArray.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        );
        const gradesCount = gradesArray.length;
        const roundedAverage = Math.round(gradesSum / gradesCount);

        return gradesCount === 0 ? 0 : roundedAverage;
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{`Full name: ${item.name} ${
                    item.lastName
                }\nSubject: ${item.subject}\nSubject grades: ${
                    item.subjectGrades
                }\nAverage: ${average(item.subjectGrades)}`}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={{ ...styles.button, ...styles.deleteButton }}
                    onPress={() => deleteStudent(item._id)}
                >
                    <Text style={{ ...styles.text, ...styles.buttonText }}>
                        Delete
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ ...styles.button, ...styles.editButton }}
                    onPress={() =>
                        navigation.navigate("StudentFormScreen", {
                            id: item._id,
                        })
                    }
                >
                    <Text style={{ ...styles.text, ...styles.buttonText }}>
                        Edit
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginBottom: 22,
        borderRadius: 5,
        backgroundColor: "#ebdbb2",
    },
    text: {
        fontSize: 16,
        color: "#282828",
    },
    button: {
        padding: 5,
        marginBottom: 8,
        borderRadius: 5,
    },
    buttonText: {
        fontWeight: "bold",
        textAlign: "center",
    },
    deleteButton: {
        backgroundColor: "#eebd35",
    },
    editButton: {
        backgroundColor: "#8ec07c",
    },
});
