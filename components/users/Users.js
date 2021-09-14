import {FlatList, StyleSheet, View} from "react-native";
import React from 'react';

import {useEffect, useState} from "react";
import {getUsers} from "../../services";
import {User} from "../user/User";


export function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => {
            setUsers([...value]);
            // console.log(value);
        })
    }, []);

    return (
        <View style={styles.users}>
            <FlatList
                data={users}
                renderItem={({item}) => <User user={item}/>}
                keyExtractor={item => '' + item.id}
                extraData={users}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    users: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        borderWidth: 5,
        borderColor: 'silver',
        paddingRight: 20,
        paddingLeft: 20,
        marginBottom: 10
    }
});