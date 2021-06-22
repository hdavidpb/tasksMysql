const db = require("../database");

const insertTask = async (req, res) => {
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;

  const sqlInsert =
    "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)";

  db.query(sqlInsert, [movieName, movieReview], (err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      console.log(`Result: ${result}`);
    }
  });
};

module.exports = { insertTask };
