const express = require("express");
const { ApolloServer, makeExecutableSchema } = require("apollo-server-express");
const config = require("./config/config");

// datasources ...
const ArtistAPI = require("./datasources/musixmatch/artist");

// typedefs ...
const Query = require("./types");
const ArtistTypeDefs = require("./types/artist");

// resolvers ...
const ArtistResolver = require("./resolvers/artist");

const app = express();
const apolloServer = new ApolloServer({
  debug: config.MODE == "development",
  schema: makeExecutableSchema({
    typeDefs: [Query, ArtistTypeDefs],
    resolvers: {
      Query: {
        ...ArtistResolver
      }
    }
  }),
  playground: config.MODE == "development",
  dataSources: () => ({
    artistAPI: new ArtistAPI({
      baseURL: config.MUSIXMATCH_BASE_URL,
      apiKey: config.MUSIXMATCH_API_KEY
    })
  })
});

apolloServer.applyMiddleware({
  app,
  path: "/graphql"
});

app.listen(config.PORT, () =>
  console.log(`Your server already serve at port ${config.PORT}`)
);
