const { RESTDataSource } = require('apollo-datasource-rest');

class HackerNewsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://hacker-news.firebaseio.com/v0/';
    }

    getTopIds() {
        return this.get('topstories.json');
    }

    getItem(id) {
        return this.get(`item/${id}.json`);
    }
    getStory(id) {
        return this.getItem(id);
    }

    getComment(id) {
        return this.getItem(id);
    }
}

module.exports = HackerNewsAPI;

