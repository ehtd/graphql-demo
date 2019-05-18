const resolvers = {

    topIds: ( parent, args, { dataSources }) => {
        return dataSources.hnAPI.getTopIds();
    },

    story: ( parent, { id } , { dataSources }) => {
        return dataSources.hnAPI.getStory(id);
    },

    comment: ( parent, { id }, { dataSources }) => {
        return dataSources.hnAPI.getComment(id);
    },

    topStories: async ( parent, { max }, { dataSources }) => {
        const end = max || 5;
        const ids = await dataSources.hnAPI.getTopIds();
        return ids.slice(0,end).map((id) => dataSources.hnAPI.getStory(id));
    },
};

module.exports = resolvers;
