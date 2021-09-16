import React, {useState, useEffect} from "react";
import {View, StyleSheet} from "react-native";
import {loadPosts} from "../../services";
import {Posts} from "../../components/posts/Posts";


export function PostsScreen(props) {
    const {navigation: {navigate}} = props;
    const [posts, setPosts] = useState([]);

    const goToPostDetails = (postItem) => {
        navigate('PostDetails', {data: postItem});
    };

    useEffect(() => {
        loadPosts().then(({data}) => {
            // console.log(data);
            setPosts(data);
        });
    }, []);

    return (
        <View style={styles.postsScreen}>
            <Posts posts={posts} goToPostDetails={goToPostDetails}/>
        </View>
    );
}

const styles = StyleSheet.create({
    postsScreen: {
        flex: 1
    }
});