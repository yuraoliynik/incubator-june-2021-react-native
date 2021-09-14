const url = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = () => {
    return fetch(url)
        .then(value => value.json())
        .then(value => value);
};

export {getPosts};