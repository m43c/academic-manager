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

    /**
     * ? Could stay on the form and not navigate to the HomeScreen
     */
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
            navigation.setOptions({ headerTitle: "Update Student" });
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
                cursorColor={"#282828"}
                placeholder="Name"
                placeholderTextColor={"#282828"}
                value={student.name}
                onChangeText={(text) => handleOnChangeText("name", text)}
            />

            <TextInput
                style={styles.input}
                cursorColor={"#282828"}
                placeholder="Last name"
                placeholderTextColor={"#282828"}
                value={student.lastName}
                onChangeText={(text) => handleOnChangeText("lastName", text)}
            />

            <TextInput
                style={styles.input}
                cursorColor={"#282828"}
                placeholder="Subject"
                placeholderTextColor={"#282828"}
                value={student.subject}
                onChangeText={(text) => handleOnChangeText("subject", text)}
            />

            <TextInput
                style={styles.input}
                cursorColor={"#282828"}
                placeholder="Subject Grades"
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
                    <Text style={styles.text}>Reset</Text>
                </TouchableOpacity>

                {!editing ? (
                    <TouchableOpacity
                        style={{ ...styles.button, ...styles.saveButton }}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.text}>Save</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={{ ...styles.button, ...styles.saveButton }}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.text}>Update</Text>
                    </TouchableOpacity>
                )}
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        fontSize: 16,
        backgroundColor: "#ebdbb2",
    },
    buttonContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        width: "47%",
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    saveButton: {
        backgroundColor: "#8ec07c",
    },
    resetButton: {
        backgroundColor: "#eebd35",
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
});
