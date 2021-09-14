import {StyleSheet, View, Text} from "react-native";
import React from 'react';


export function Comment({comment}) {
    return (
        <View style={styles.comment}>
            <Text>
                Comment: {comment.id}
            </Text>

            <Text>
                Post: {comment.postId}
            </Text>

            <Text>
                Email: {comment.email}
            </Text>

            <Text>
                Name: {comment.name}
            </Text>

            <Text>
                Body: {comment.body}
            </Text>
        </View>
    );}

const styles = StyleSheet.create({
    comment: {
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