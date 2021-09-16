import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {PostDetails} from "../../components/postDetails/Postdetails";


export function PostDetailsScreen(props) {
    const {route: {params: {data}}} = props;

    return (
        <View style={styles.postDetailsScreen}>
            <PostDetails post={data}/>
        </View>
    );
}

const styles = StyleSheet.create({
    postDetailsScreen: {
        flex: 1,
        padding: 20
    }
});