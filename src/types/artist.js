const typedefs = `
type Artist {
    id: Int
    mbId: String
    name: String
    country: String
    comment: String
    nameTranslations: [ArtistNameTranslation]
    aliases: [ArtistAlias]
    rating: Int
    restricted: Int
    twitterURL: String
    updatedTime: String
}


type ArtistNameTranslation {
    translation: Translation
}

type ArtistAlias {
    alias: String
}

type Translation {
    language: String
    translation: String
}
`;

module.exports = typedefs;
