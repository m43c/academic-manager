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
                <Text style={styles.text}>Nombre Completo:</Text>
                <Text>{`${item.name} ${item.lastName}\n`}</Text>
                
                <Text style={styles.text}>Materia:</Text>
                <Text>{`${item.subject}\n`}</Text>
                
                <Text style={styles.text}>Notas de Materia:</Text>
                <Text>{`${item.subjectGrades}\n`}</Text>
                
                <Text style={styles.text}>Promedio:</Text>
                <Text>{average(item.subjectGrades)}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={{ ...styles.button, ...styles.deleteButton }}
                    onPress={() => deleteStudent(item._id)}
                >
                    <Text style={styles.buttonText}>Eliminar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ ...styles.button, ...styles.editButton }}
                    onPress={() =>
                        navigation.navigate("StudentFormScreen", {
                            id: item._id,
                        })
                    }
                >
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 10,
        marginBottom: 22,
    },
    text: {
        fontWeight: "bold",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    button: {
        width: 100,
        padding: 5,
        marginTop: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
    deleteButton: {
        backgroundColor: "#e4001c",
    },
    editButton: {
        backgroundColor: "#2d3b8f",
    },
});
