const corsOptions = {
    origins:[
        "http://localhost:3000",
        "https://localhost:3000",
        "https://localhost:3001",
        "http://localhost:3001",
        "http://localhost:3002",
        "https://localhost:3002",
    ],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
    preflightContinue: true,
    maxAge: 3600,
    exposedHeaders: ["Content-Length", "X-Foo", "X-Bar"],
    origin: true,
}
module.exports = { corsOptions };