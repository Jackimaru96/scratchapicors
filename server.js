const corsProxy = require("cors-anywhere");

// Set the port that the server will listen on.
const port = process.env.PORT || 8080;

// Start the server.
corsProxy
  .createServer({
    originWhitelist: [], // Allow all origins
  })
  .listen(port, () => {
    console.log(`CORS Anywhere server running on port ${port}`);
  });
