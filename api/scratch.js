const axios = require("axios");

const setCorsHeaders = (res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
};

module.exports = async (req, res) => {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

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
