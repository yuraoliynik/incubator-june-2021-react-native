import myAxios from "./myAxios";


const loadPosts = () => {
    return myAxios.get('posts');
};


export {loadPosts};