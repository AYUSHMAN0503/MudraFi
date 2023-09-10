const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList } = require("graphql");

const app = express();
const PORT = process.env.PORT || 4000;

// MongoDB Connection:: daalna hai abhi
mongoose.connect("mongodb://localhost", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

const Review = mongoose.model("Review", {
  name: String,
  email: String,
  review: String,
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    reviews: {
      type: new GraphQLList(GraphQLString),
      resolve(parent, args) {
        return Review.find().exec();
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addReview: {
      type: GraphQLString,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        review: { type: GraphQLString },
      },
      resolve(parent, args) {
        const { name, email, review } = args;
        const newReview = new Review({ name, email, review });
        return newReview.save();
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
