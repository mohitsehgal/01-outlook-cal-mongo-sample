const express = require("express");
const config = require("./config");

const router = express.Router();
const DEFAULT_OUTLOOK_REDIRECT_URI = "http://localhost:8080/";

// define the home page route
router.get("/login-url", (req, res) => {
  const msClientId = config.microsoft.clientId;
  const redirectURI =
    config.microsoft.redirectUri || DEFAULT_OUTLOOK_REDIRECT_URI;
  const scope =
    "openid offline_access https://graph.microsoft.com/Calendars.ReadWrite";
  const state = "21345";
  const responseType = "code";
  const responseMode = "query";
  const url = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${msClientId}&response_type=${responseType}&redirect_uri=${redirectURI}&response_mode=${responseMode}&scope=${scope}&state=${state}`;
  res.json({ url });
});

module.exports = router;
