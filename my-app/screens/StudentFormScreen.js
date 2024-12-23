import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Layout from "../components/Layout";
import {
    requestCreateStudent,
    requestReadStudent,
    requestUpdateStudent,
} from "../api/studentApi";

export default function StudentFormScreen({ navigation, route }) {
    const [student, setStudent] = useState({
        name: "",
        lastName: "",
        subject: "",
        subjectGrades: "",
    });
    const [editing, setEditing] = useState(false);

    const handleOnChangeText = (name, value) =>
        setStudent({ ...student, [name]: value });

    const handleSubmit = async () => {
        try {
            if (!editing) {
                await requestCreateStudent(student);
            } else {
                await requestUpdateStudent(route.params.id, student);
            }

            navigation.navigate("HomeScreen");
        } catch (error) {
            console.error(error);
        }
    };

    const handleReset = () => {
        setStudent({
            name: "",
            lastName: "",
            subject: "",
            subjectGrades: "",
        });
    };

    useEffect(() => {
        if (route.params && route.params.id) {
            navigation.setOptions({ headerTitle: "Actualizar Estudiante" });
            setEditing(true);

            (async () => {
                const student = await requestReadStudent(route.params.id);
                setStudent({
                    name: student.data.name,
                    lastName: student.data.lastName,
                    subject: student.data.subject,
                    subjectGrades: student.data.subjectGrades,
                });
            })();
        }
    }, []);

    return (
        <Layout>
            <TextInput
                style={styles.input}
                // cursorColor={"#282828"}
                placeholder="Nombre"
                placeholderTextColor={"#282828"}
                value={student.name}
                onChangeText={(text) => handleOnChangeText("name", text)}
            />

            <TextInput
                style={styles.input}
                cursorColor={"#282828"}
                placeholder="Apellido"
                placeholderTextColor={"#282828"}
                value={student.lastName}
                onChangeText={(text) => handleOnChangeText("lastName", text)}
            />

            <TextInput
                style={styles.input}
                cursorColor={"#282828"}
                placeholder="Materia"
                placeholderTextColor={"#282828"}
                value={student.subject}
                onChangeText={(text) => handleOnChangeText("subject", text)}
            />

            <TextInput
                style={styles.input}
                cursorColor={"#282828"}
                placeholder="Notas de materia"
                placeholderTextColor={"#282828"}
                value={student.subjectGrades}
                onChangeText={(text) =>
                    handleOnChangeText("subjectGrades", text)
                }
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={{ ...styles.button, ...styles.resetButton }}
                    onPress={handleReset}
                >
                    <Text style={styles.text}>Restablecer</Text>
                </TouchableOpacity>

                {!editing ? (
                    <TouchableOpacity
                        style={{ ...styles.button, ...styles.saveButton }}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.text}>Guardar</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={{ ...styles.button, ...styles.saveButton }}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.text}>Actualizar</Text>
                    </TouchableOpacity>
                )}
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        paddingLeft: 2,
        marginBottom: 30,
        borderRadius: 5,
        borderBottomWidth: 2,
        fontSize: 16,
    },
    buttonContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    button: {
        width: "47%",
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    saveButton: {
        backgroundColor: "#2e3b8f",
    },
    resetButton: {
        backgroundColor: "#888a85",
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        color: "#fff"
    },
});
