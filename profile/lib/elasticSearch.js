const {Client} = require('@elastic/elasticsearch');
const fs = require('fs');
const client = new Client({
    node: 'https://localhost:9200',
    auth: {
        username: 'elastic',
        password: 'VYn7N-2p+P9C3iHg-h98',
    },
    tls: {
        ca: process.env.CA_CERT,
        rejectUnauthorized: false,
    },
});
// testing the client

module.exports = client;
