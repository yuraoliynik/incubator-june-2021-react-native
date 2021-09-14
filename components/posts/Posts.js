import {FlatList, StyleSheet, View} from "react-native";
import React from 'react';

import {useEffect, useState} from "react";
import {getPosts} from "../../services";
import {Post} from "../post/Post";


export function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => {
            setPosts([...value]);
            // console.log(value);
        })
    }, []);

    return (
        <View style={styles.posts}>
            <FlatList
                data={posts}
                renderItem={({item}) => <Post post={item}/>}
                keyExtractor={item => '' + item.id}
                extraData={posts}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    posts: {
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