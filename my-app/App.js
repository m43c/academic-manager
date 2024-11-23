import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import StudentFormScreen from "./screens/StudentFormScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{
                        title: "Login",
                        headerStyle: {
                            backgroundColor: "#7fa2ac",
                        },
                        headerTitleStyle: {
                            fontWeight: "bold",
                            color: "#282828",
                        },
                    }}
                />

                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={({ navigation }) => ({
                        title: "Academic Manager",
                        headerStyle: {
                            backgroundColor: "#7fa2ac",
                        },
                        headerTitleStyle: {
                            fontWeight: "bold",
                            color: "#282828",
                        },
                        headerRight: () => (
                            <TouchableOpacity
                                style={styles.touchableOpacity}
                                onPress={() =>
                                    navigation.navigate("StudentFormScreen")
                                }
                            >
                                <Text style={styles.text}>New Student</Text>
                            </TouchableOpacity>
                        ),
                    })}
                />

                <Stack.Screen
                    name="StudentFormScreen"
                    component={StudentFormScreen}
                    options={{
                        title: "Create Student",
                        headerStyle: {
                            backgroundColor: "#7fa2ac",
                        },
                        headerTitleStyle: {
                            fontWeight: "bold",
                            color: "#282828",
                        },
                        headerTintColor: "#282828",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    touchableOpacity: {
        padding: 5,
        borderRadius: 5,
        backgroundColor: "#d4879c",
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#282828",
    },
});
