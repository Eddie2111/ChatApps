const corsOptions =
    {
        origin: process.env.ORIGIN,
        optionsSuccessStatus: 200,
        credentials: true,
      };
module.exports = corsOptions;