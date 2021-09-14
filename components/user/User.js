import {StyleSheet, View, Text} from "react-native";
import React from 'react';


export function User({user}) {
    return (
        <View style={styles.user}>
            <Text>
                User: {user.id}
            </Text>

            <Text>
                Name: {user.name}
            </Text>

            <Text>
                Email: {user.email}
            </Text>

            <Text>
                Phone: {user.phone}
            </Text>

            <Text>
                Website: {user.website}
            </Text>
        </View>
    );}

const styles = StyleSheet.create({
    user: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        // justifyContent: 'center'
        minWidth: '100%',
        borderWidth: 1,
        borderColor: 'silver',
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 20,
        paddingLeft: 20,
        marginBottom: 10
    }
});