import React from "react";
import {View, StyleSheet} from "react-native";
import {UserDetails} from "../../components/userDetails/UserDetails";


export function UserDetailsScreen(props) {
    const {route: {params: {data}}} = props;

    return (
        <View style={styles.userDetailsScreen}>
            <UserDetails user={data}/>
        </View>
    );
}

const styles = StyleSheet.create({
    userDetailsScreen: {
        flex: 1,
        padding: 20
    }
});