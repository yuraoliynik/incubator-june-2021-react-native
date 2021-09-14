import {FlatList, StyleSheet, View} from "react-native";
import React from 'react';

import {useEffect, useState} from "react";
import {getComments} from "../../services";
import {Comment} from "../comment/Comment";


export function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => {
            setComments([...value]);
            // console.log(value);
        })
    }, []);

    return (
        <View style={styles.comments}>
            <FlatList
                data={comments}
                renderItem={({item}) => <Comment comment={item}/>}
                keyExtractor={item => '' + item.id}
                extraData={comments}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    comments: {
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