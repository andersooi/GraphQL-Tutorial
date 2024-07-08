import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// import db
import db from "./db.js";

// import types
import { typeDefs } from "./schema.js";

// define resolvers
const resolvers = {
    Query: {
        reviews: () => db.reviews,
        // create entry point for review
        review: (_, args) => db.reviews.find((review) => review.id === args.id),
        games: () => db.games,
        game: (_, args) => db.games.find((game) => game.id === args.id),
        authors: () => db.authors,
        author: (_, args) => db.authors.find((author) => author.id === args.id)
    }
}

// server setup
const server = new ApolloServer({
    // typeDefs - definitions of types of data
    typeDefs,
    // resolvers
    resolvers
});

// destructuring the url from the startStandAloneServer function
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log('Server ready at', 4000);