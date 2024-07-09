# 🚀 GraphQL Tutorial: Building a GraphQL Server with Node.js and Apollo

This project was undertaken to dive deep into the world of GraphQL and build a server that can effectively handle queries and mutations. The main goal was to understand and implement a GraphQL server using Node.js and Apollo Server package, along with making queries using Apollo Explorer.

## 📦 Technologies

- `Node.js`
- `Apollo Server`
- `GraphQL`
- `Apollo Explorer`
- `npm`

## 🦄 Features

Here's what one can do with a GraphQL Server:

- **Define Schemas**: GraphQL schemas define the structure of the data and the types of queries and mutations that can be performed.
- **Run Queries**: Fetch specific data points or related data from the server.
- **Execute Mutations**: Perform create, update, and delete operations on the data.

### Example Queries and Mutations:

- **Fetching Games:**
  ```graphql
  query GameQuery {
    games {
      title
    }
  }

- **Fetching Reviews with Related Data:**
  ```graphql
  query ReviewQuery($id: ID!) {
    review(id: $id) {
      rating,
      game {
        title,
        platform,
        reviews {
          rating
        }
      }
    }
  }
  ```

- **Deleting a Game:**
  ```graphql
  mutation DeleteGame($id: ID!) {
    deleteGame(id: $id) {
      id,
      title,
      platform
    }
  }
  ```

- **Editing a Game:**
  ```graphql
  mutation EditMutation($edits: EditGameInput!, $id: ID!) {
    updateGame(edits: $edits, id: $id) {
      title,
      platform
    }
  }
  ```

## 👩🏽‍🍳 The Process

### Project Setup:

1. **Initialise Project:**
    - Created a new Node.js project.
    - Installed necessary dependencies including `GraphQL` and `Apollo Server`.

2. **Defining Schema:**
    - Type definitions describe data types and relationships.
    - Implemented using GraphQL SDL (Schema Definition Language).

3. **Resolvers:**
    - Created resolver functions to fetch and manipulate the data.
    - Resolvers connected to local data variables to simulate database functionality.

4. **Server Setup:**
    - Configured Apollo Server with type definitions and resolvers.
    - Set up server to run on a specified port (e.g., `localhost:4000`).

5. **Testing with Apollo Explorer:**
    - Used Apollo Explorer to test different queries and mutations.
    - Validated the schema and resolver functionality with specified test cases.

## 📚 What I Learned

### Core Principles of GraphQL:

- **Single Endpoint Efficiency:** 
    - GraphQL uses a single endpoint for all operations, reducing the complexity of managing multiple REST API endpoints.

- **Precision in Data Fetching:**
    - Ability to request only necessary data fields, preventing over-fetching and under-fetching.

- **GraphQL Queries:**
    - Constructing queries to fetch nested and related data in a single request.

### Practical Experience with Apollo Server:

- **Schema Definition:**
    - Creating various types and defining relationships between them in the schema.
    
- **Resolver Functions:**
    - Implementing resolver functions to handle data fetching and mutations.

- **Query Variables:**
    - Utilising query variables to fetch dynamic data points based on user input.

### Debugging and Optimising:

- **Error Handling:**
    - Debugging common errors and issues related to server setup and schema validation.
    
- **Data Connections:**
    - Efficiently connecting related data and optimising query performance.

### Hands-On with Apollo Explorer:

- **Interactive Query Execution:**
    - Testing and validating the GraphQL API using Apollo Explorer.

### Future Applications:

- Planning to integrate GraphQL into more complex platforms such as Next.js and Supabase for advanced projects.

## 💭 How can it be improved?

- Add more robust error handling and user-friendly messages.
- Implement authentication and authorisation mechanisms.
- Optimise resolver functions for better performance.
- Extend schema with more complex types and relationships.
- Integrate with a real database instead of local data variables.
