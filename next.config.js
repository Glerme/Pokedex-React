const dotenv = require("dotenv-safe");

dotenv.config();

const withPlugins = require("next-compose-plugins");

const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    IMAGE_API_URL: process.env.IMAGE_API_URL,
    IMAGE_API_TYPE_URL: process.env.IMAGE_API_TYPE_URL,
  },
};

module.exports = withPlugins([], nextConfig);
