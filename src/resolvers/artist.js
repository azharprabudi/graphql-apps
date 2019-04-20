const resolver = {
  artist: (_, { id }, { dataSources: ds }) => {
    return ds.artistAPI.findArtistById(id);
  }
};

module.exports = resolver;
