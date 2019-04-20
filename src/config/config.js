module.exports = {
  PORT: process.env.PORT || 3000,
  MODE: process.env.MODE || "development",
  MUSIXMATCH_BASE_URL: "https://api.musixmatch.com/ws/1.1/",
  MUSIXMATCH_API_KEY: process.env.MUSIXMATCH_API_KEY
};
