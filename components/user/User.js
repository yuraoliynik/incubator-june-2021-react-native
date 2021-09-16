import React from "react";
import {StyleSheet, View, Text, Button} from "react-native";


export function User({user, goToUserDetails}) {
    const handleOnPress = () => {
        goToUserDetails(user);
    };

    return (
        <View style={styles.user}>
            <Text style={styles.userText}>
                {user.id} {user.name}
            </Text>

            <Button title={'User details'} onPress={handleOnPress}/>
        </View>
    );
}


const styles = StyleSheet.create({
    user: {
        flex: 1,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'silver',
        padding: 10,
        marginBottom: 10
    },

    userText: {
        marginBottom: 10
    }
})