import {StyleSheet, View, Text} from "react-native";
import React from 'react';


export function PostDetails({post}) {
    return (
        <View style={styles.postDetails}>
            <Text style={styles.postDetailsText}>
                Post: {post.id}
            </Text>

            <Text style={styles.postDetailsText}>
                User: {post.userId}
            </Text>

            <Text style={styles.postDetailsText}>
                Title: {post.title}
            </Text>

            <Text>
                Body: {post.body}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    postDetails: {
        flex: 1,
    },

    postDetailsText: {
        marginBottom: 10
    }
});