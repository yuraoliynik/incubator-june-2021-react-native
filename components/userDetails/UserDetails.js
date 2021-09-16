import {StyleSheet, View, Text} from "react-native";
import React from 'react';


export function UserDetails({user}) {
    return (
        <View style={styles.userDetails}>
            <Text style={styles.userDetailsText}>
                User: {user.id}
            </Text>

            <Text style={styles.userDetailsText}>
                Name: {user.name}
            </Text>

            <Text style={styles.userDetailsText}>
                Email: {user.email}
            </Text>

            <Text style={styles.userDetailsText}>
                Phone: {user.phone}
            </Text>

            <Text>
                Website: {user.website}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    userDetails: {
        flex: 1,
    },

    userDetailsText: {
        marginBottom: 10
    }
});