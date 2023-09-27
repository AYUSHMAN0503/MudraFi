import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_REVIEW_MUTATION } from "../../../../SERVER/graphql";

const ReviewPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
  });
  const { name, email, review } = formData;

  const [addReview] = useMutation(ADD_REVIEW_MUTATION);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !review) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      // GraphQL mutation 
      await addReview({ variables: { name, email, review } });
      console.log("Review added successfully!");
      setFormData({ name: "", email: "", review: "" });
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <div className="container mx-auto p-5">
      <h1 className="lg:text-6xl md:text-5xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 text-center font-bold mb-4 p-2">
        Write your Review
      </h1>
      <div className="container mx-auto text-white p-2">
        <p className="mx-auto">
        Cultivate your perspective in this space. We eagerly await your insights and reflections. Your valuable input is pivotal in fostering constructive discussions and enhancing our shared understanding. Please, share your thoughts and let's embark on a fruitful exchange of ideas.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-5 p-2">
            <label htmlFor="name" className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full p-2 mt-2"
              style={{ color: 'black' }}
              placeholder="Enter your name here..."
              required
            />
          </div>
          <div className="mb-3 p-2">
            <label htmlFor="email" className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full p-2 mt-2"
              style={{ color: 'black' }}
              placeholder="Enter your email id here!"
              required
            />
          </div>
          <div className="mb-3 p-2">
            <label htmlFor="review" className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 font-semibold">
              Review
            </label>
            <textarea
              id="review"
              name="review"
              value={review}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full p-2 h-32 mt-2"
              style={{ color: 'black' }}
              placeholder="Enter your review here or give us a suggestion"
              required
            ></textarea>
          </div>
          <div className="mt-4 p-2">
            <button
              type="submit"
              className={`bg-orange-500 text-white rounded px-4 py-2 ${
                !name || !email || !review
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
              disabled={!name || !email || !review}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;
