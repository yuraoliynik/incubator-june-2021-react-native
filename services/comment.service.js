const url = 'https://jsonplaceholder.typicode.com/comments';

const getComments = () => {
    return fetch(url)
        .then(value => value.json())
        .then(value => value);
};

export {getComments};