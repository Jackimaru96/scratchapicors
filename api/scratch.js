const axios = require("axios");
const cors = require("cors")();

module.exports = async (req, res) => {
  await cors(req, res);

  const { username } = req.query;

  if (!username) {
    res.status(400).send({ error: "A username is required." });
    return;
  }

  try {
    const response = await axios.get(
      `https://api.scratch.mit.edu/users/${username}/projects`
    );
    res.send(response.data);
  } catch (error) {
    res.status(500).send({
      error: "An error occurred while fetching data from the Scratch API.",
    });
  }
};
