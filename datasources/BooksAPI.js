const _ = require('lodash');

const books = [
    {
        id: '1',
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
        rating: '5',
    },
    {
        id: '2',
        title: 'Jurassic Park',
        author: 'Michael Crichton',
        rating: '4',
    },
    {
        id: '3',
        title: 'Jurassic Park 2',
        author: 'Michael Crichton',
        rating: '1',
    },
];

class BooksAPI {

    getBook(id) {
        return _.find(books, { id });
    }

    getAll() {
        return books;
    }
}

module.exports = BooksAPI;
