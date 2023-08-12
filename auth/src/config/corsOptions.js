const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    methods: "GET,POST",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    maxAge: 36000,
    origin: true,
}
module.exports = { corsOptions };