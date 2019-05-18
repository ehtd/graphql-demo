const books = [
    {
        id: '1',
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        id: '2',
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

const resolvers = {
    books: () => books,
    book( parent, opts) {
        return _.find(books, opts)
    },
};

module.exports = resolvers;
