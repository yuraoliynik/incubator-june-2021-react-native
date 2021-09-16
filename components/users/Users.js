import React from 'react';
import {StyleSheet, FlatList, View} from "react-native";
import {User} from "../user/User";


export function Users({users, goToUserDetails}) {
    return (
        <View style={styles.users}>
            <FlatList
                data={users}
                renderItem={({item}) => <User user={item} goToUserDetails={goToUserDetails}/>}
                keyExtractor={item => '' + item.id}
                extraData={users}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    users:{
        flex: 1,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    }
})