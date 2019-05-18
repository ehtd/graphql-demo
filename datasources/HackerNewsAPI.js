const { RESTDataSource } = require('apollo-datasource-rest');

class HackerNewsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://hacker-news.firebaseio.com/v0/';
    }

    getTopIds() {
        return this.get('topstories.json');
    }

    getStory(id) {
        return this.get(`item/${id}.json`)
    }

    getComment(id) {
        return this.get(`item/${id}.json`)
    }
}

module.exports = HackerNewsAPI;

