module.exports = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT,

  microsoft: {
    clientId: process.env.MS_CLIENT_ID,
    clientSecret: process.env.MS_CLIENT_SECRET,
    redirectUri: process.env.MS_REDIRECT_URL,
  },
};
