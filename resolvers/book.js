const resolvers = {
    books: ( parent, args , { dataSources }) => {
        return dataSources.booksAPI.getAll();
    },
    book: ( parent, { id }, { dataSources }) => {
        return dataSources.booksAPI.getBook(id);
    },
};

module.exports = resolvers;
