use simpleStreamDB;

db.movies.insertMany([
  {
    movie_id: 501,
    title: "Inception",
    genre: "Sci-Fi"
  },
  {
    movie_id: 502,
    title: "The Dark Knight",
    genre: "Action"
  }
]);

db.users.insertOne({
  user_id: 1,
  name: "John Doe",
  recommended_movies: ["Inception", "The Dark Knight"]
});

db.users.find(
  { user_id: 1 },
  {
    name: 1,
    recommended_movies: 1,
    _id: 0
  }
);
