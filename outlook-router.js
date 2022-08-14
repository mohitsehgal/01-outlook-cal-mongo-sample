const express = require("express");
const router = express.Router();

// define the home page route
router.get("/login-url", (req, res) => {
  const msClientId = config.microsoftOutlook.clientId;
  const redirectURI = redirect_uri || DEFAULT_OUTLOOK_REDIRECT_URI;
  const scope =
    "openid offline_access https://graph.microsoft.com/Calendars.ReadWrite";
  const state = "21345";
  const responseType = "code";
  const responseMode = "query";
  const url = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${msClientId}&response_type=${responseType}&redirect_uri=${redirectURI}&response_mode=${responseMode}&scope=${scope}&state=${state}`;
  res.json(url);
});

module.exports = router;
