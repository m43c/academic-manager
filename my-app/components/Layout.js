import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Layout({ children }) {
    return (
        <View style={styles.view}>
            <StatusBar style="light" backgroundColor="#000000" />
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        padding: 20,
    },
});
