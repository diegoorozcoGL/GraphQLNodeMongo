import { resolvers } from './resolvers';

import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
    type Query{
        hello : String       
        users: [User]
        user(_id: ID): User
        userByLastname(lastname: String!): [User]
    }    
    type User {
        _id: ID
        firstname: String!
        lastname: String!
        age: Int!
    }
    type Mutation {       
        createUser(input: UserInput) : User
        deleteUser(_id : ID): User
        updateUser(_id : ID, input: UserInput): User        
    }    
    input UserInput{
        firstname: String!
        lastname: String!
        age: Int!
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});