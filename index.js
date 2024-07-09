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
        // create entry point for a review
        review: (_, args) => db.reviews.find((review) => review.id === args.id),
        games: () => db.games,
        // create entry point for a game
        game: (_, args) => db.games.find((game) => game.id === args.id),
        authors: () => db.authors,
        // create entry point for an author
        author: (_, args) => db.authors.find((author) => author.id === args.id)
    },
    // for related data
    Game: {
        reviews: (parent) => db.reviews.filter((review) => review.game_id === parent.id)
    },
    Author: {
        reviews: (parent) => db.reviews.filter((review) => review.author_id === parent.id)
    },
    Review : {
        game: (parent) => db.games.find((game) => game.id === parent.game_id),
        author: (parent) => db.authors.find((author) => author.id === parent.author_id)
    },
    // for mutations
    Mutation: {
        addGame: (_, args) => {
            // create a new game object
            let game = {
                ...args.game,
                // create a random id
                id: Math.floor(Math.random() * 1000).toString()
            }
            // push game to the db
            db.games.push(game)
            // return the new game
            return game
        },
        deleteGame: (_, args) => {
            // filter out games that don't match the id
            db.games = db.games.filter((game) => game.id !== args.id)
            // return the updated games
            return db.games
        },
        updateGame: (_, args) => {
            // map the update to the speicifc game
            db.games = db.games.map((game) => {
                if (game.id === args.id) {
                    return {
                        ...game,
                        ...args.edits
                    }
                }
                return game
            })
            // return the updated game
            return db.games.find((game) => game.id === args.id)
        }
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