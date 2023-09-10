import { gql } from "@apollo/client";

export const ADD_REVIEW_MUTATION = gql`
  mutation AddReview($name: String!, $email: String!, $review: String!) {
    addReview(name: $name, email: $email, review: $review)
  }
`;
