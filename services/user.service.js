import myAxios from "./myAxios";


const loadUsers = () => {
     return myAxios.get('users');
};


export {loadUsers};