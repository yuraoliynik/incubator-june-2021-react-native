import {StyleSheet, View, Text} from "react-native";
import React from 'react';


export function Post({post}) {
    return (
        <View style={styles.post}>
            <Text>
                Post: {post.id}
            </Text>

            <Text>
                User: {post.userId}
            </Text>

            <Text>
                Title: {post.title}
            </Text>

            <Text>
                Body: {post.body}
            </Text>
        </View>
    );}

const styles = StyleSheet.create({
    post: {
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