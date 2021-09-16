import React, {useState, useEffect} from "react";
import {View, StyleSheet} from "react-native";
import {loadUsers} from "../../services";
import {Users} from "../../components/users/Users";


export function UsersScreen(props) {
    const {navigation: {navigate}} = props;
    const [users, setUsers] = useState([]);

    const goToUserDetails = (userItem) => {
        navigate('UserDetails', {data: userItem});
    };

    useEffect(() => {
        loadUsers().then(({data}) => {
            // console.log(data);
            setUsers(data);
        });
    }, []);

    return (
        <View  style={styles.usersScreen}>
            <Users users={users} goToUserDetails={goToUserDetails}/>
        </View>
    );
}

const styles = StyleSheet.create({
    usersScreen:{
        flex: 1
    }
})
