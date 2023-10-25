import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { requestReadStudents, requestDeleteStudent } from "../api/studentApi";
import StudentItem from "./StudentItem";

export default function StudentsList() {
    const [students, setStudents] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const isFocused = useIsFocused();

    const readStudents = async () => {
        const response = await requestReadStudents();
        setStudents(response.data);
    };

    const deleteStudent = async (id) => {
        await requestDeleteStudent(id);
        await readStudents();
    };

    const renderItem = ({ item }) => (
        <StudentItem item={item} deleteStudent={deleteStudent} />
    );

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await readStudents();
        setRefreshing(false);
    });

    useEffect(() => {
        readStudents();
    }, [isFocused]);

    return (
        <FlatList
            style={styles.flatlist}
            data={students}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={["#000000"]}
                    progressBackgroundColor="#ffffff"
                />
            }
        />
    );
}

const styles = StyleSheet.create({
    flatlist: {
        width: "100%",
    },
});
