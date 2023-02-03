require('dotenv').config();

export const config = {
   database: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    port: process.env.DB_PORT,
   },

    app_url:process.env.APP_URL,
    port:process.env.PORT,
    node_env:process.env.NODE_ENV,

    token_secret_key: process.env.TOKEN_SECRET_KEY
  }