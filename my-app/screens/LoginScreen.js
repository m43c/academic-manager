import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Alert,
    StatusBar,
} from "react-native";

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const validUsername = "admin";
        const validPassword = "1234";

        if (username === validUsername && password === validPassword) {
            navigation.replace("HomeScreen");
        } else {
            Alert.alert(
                "Error de inicio de sesión",
                "Usuario o contraseña incorrectos"
            );
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor="#000000" />

            <Text style={styles.title}>Iniciar Sesión</Text>

            <Image
                source={require("../assets/uajms-logo.png")}
                style={styles.logo}
            />

            <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Acceder</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    logo: {
        width: 200,
        height: 280,
        alignSelf: "center",
    },
    input: {
        paddingLeft: 2,
        marginBottom: 30,
        borderBottomWidth: 2,
        borderRadius: 5,
    },
    button: {
        backgroundColor: "#2e3a8f",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
