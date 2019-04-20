const resolver = {
  artist: (_, __, { dataSources: ds }) => {
    return ds.artistAPI.findArtistById(118);
  }
};

module.exports = resolver;
