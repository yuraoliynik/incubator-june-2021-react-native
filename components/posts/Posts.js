import React from 'react';
import {StyleSheet, FlatList, View} from "react-native";
import {Post} from "../post/Post";


export function Posts({posts, goToPostDetails}) {
    return (
        <View style={styles.posts}>
            <FlatList
                data={posts}
                renderItem={({item}) => <Post post={item} goToPostDetails={goToPostDetails}/>}
                keyExtractor={item => '' + item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    posts:{
        flex: 1,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    }
})