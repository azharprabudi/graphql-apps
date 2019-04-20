const typedefs = `
type Artist {
    id: Int
    mbId: String
    name: String
    country: String
    aliases: [ArtistAlias]
    rating: Int
    twitterURL: String
    updatedTime: String
}

type ArtistAlias {
    alias: String
}
`;

module.exports = typedefs;
