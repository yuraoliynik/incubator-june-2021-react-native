import React from "react";
import {StyleSheet, View, Text, Button} from "react-native";


export function Post({post, goToPostDetails}) {
    const handleOnPress = () => {
        goToPostDetails(post);
    };

    return (
        <View style={styles.post}>
            <Text style={styles.postText}>
                Post: {post.id}
            </Text>

            <Text style={styles.postText}>
                Title: {post.title}
            </Text>

            <Button title={'Post details'} onPress={handleOnPress}/>
        </View>
    );
}


const styles = StyleSheet.create({
    post: {
        flex: 1,
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: 'silver',
        padding: 10,
        marginBottom: 10
    },

    postText: {
        marginBottom: 10
    }
})