const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Compute {
    id: ID!
    name: String!
    mark: String
    price: Float
    size: Float
  }

  type Query {
    getAllComputes: [Compute]
    getComputeByID(id: ID!): Compute
  }

  type Mutation {
    createCompute(
      id: ID!
      name: String!
      mark: String!
      price: Float!
      size: Float
    ): Compute

    deleteCompute(id: ID!): Compute

    updateCompute(id: ID!, name: String, mark: String, price: Float, size: Float): Compute

  }
`;

module.exports = { typeDefs };