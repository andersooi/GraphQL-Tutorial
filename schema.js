export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        # create relationship with reviews
        reviews: [Review!] # don't need ! outside, because a game can have no reviews
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        # create relationship with game and author
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        # create relationship with reviews
        reviews: [Review!] # don't need ! outside, because an author can have no reviews
    }
    # main query type
    type Query {
        reviews: [Review]
        # create entry point for reviews
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }
    # allow for mutations
    type Mutation {
        # add a game
        addGame(game: AddGameInput): Game
        # delete a game
        deleteGame(id: ID!): [Game]
        # update a game
        updateGame(id: ID!, edits: EditGameInput): Game
    }
    # create input to group
    input AddGameInput {
        title: String!
        platform: [String!]!
    }
    input EditGameInput {
        title: String
        platform: [String!]
    }
`

// basic types: String, Int, Float, Boolean, ID