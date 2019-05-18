const resolvers = {

    topIds: ( parent, args , { dataSources }) => {
        return dataSources.hnAPI.getTopIds();
    },

    story: ( parent, { id } , { dataSources }) => {
        return dataSources.hnAPI.getStory(id);
    },

    topStories: async ( parent, { id } , { dataSources }) => {
        const ids = await dataSources.hnAPI.getTopIds();
        return ids.slice(0,10).map((id) => dataSources.hnAPI.getStory(id));
    },
};

module.exports = resolvers;
